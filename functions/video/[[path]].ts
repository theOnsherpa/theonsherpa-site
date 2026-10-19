// Pages static assets do not serve byte ranges. Native video controls need
// partial responses so viewers can seek without downloading the whole video.
export const onRequest: PagesFunction<{ ASSETS: Fetcher }> = async ({ request, env, next }) => {
  if (request.method !== "GET" && request.method !== "HEAD") return next();

  const headers = new Headers(request.headers);
  headers.delete("Range");
  headers.delete("If-Range");
  const asset = await env.ASSETS.fetch(new Request(request, { headers }));
  if (asset.status !== 200 || !asset.headers.get("Content-Type")?.startsWith("video/")) {
    return asset;
  }

  const responseHeaders = new Headers(asset.headers);
  responseHeaders.set("Accept-Ranges", "bytes");
  const range = request.headers.get("Range");
  const ifRange = request.headers.get("If-Range");
  const matchesValidator = !ifRange ||
    (!ifRange.startsWith("W/") && ifRange === asset.headers.get("ETag")) ||
    ifRange === asset.headers.get("Last-Modified");
  // Ignore unsupported multi-range requests and stale If-Range validators.
  const match = range?.match(/^bytes=(\d*)-(\d*)$/);
  if (request.method === "HEAD" || !match || (!match[1] && !match[2]) || !matchesValidator) {
    return new Response(asset.body, { status: 200, headers: responseHeaders });
  }

  // Pages assets are limited to 25 MiB, bounding this in-memory slice.
  const body = await asset.arrayBuffer();
  const size = body.byteLength;
  const start = match[1] ? Number(match[1]) : Math.max(0, size - Number(match[2]));
  const end = match[1] && match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= size) {
    responseHeaders.set("Content-Range", `bytes */${size}`);
    responseHeaders.set("Content-Length", "0");
    return new Response(null, { status: 416, headers: responseHeaders });
  }

  responseHeaders.set("Content-Range", `bytes ${start}-${end}/${size}`);
  responseHeaders.set("Content-Length", String(end - start + 1));
  return new Response(body.slice(start, end + 1), { status: 206, headers: responseHeaders });
};
