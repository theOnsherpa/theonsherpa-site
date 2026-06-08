type Env = {
  NOTION_TOKEN?: string;
  NOTION_DATABASE_ID?: string;
  NOTION_VERSION?: string;
};

type IntakePayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  role?: unknown;
  need?: unknown;
  timeline?: unknown;
  message?: unknown;
  source?: unknown;
};

const jsonHeaders = { "Content-Type": "application/json" };

const textValue = (value: unknown) => (typeof value === "string" ? value.trim() : "");
const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const richText = (content: string) => ({
  rich_text: [{ type: "text", text: { content } }],
});

const select = (name: string) => ({
  select: name ? { name } : null,
});

const buildNotionProperties = (payload: Required<Record<keyof IntakePayload, string>>) => ({
  Name: {
    title: [{ type: "text", text: { content: payload.name } }],
  },
  Email: { email: payload.email },
  Company: richText(payload.company),
  Role: richText(payload.role),
  Need: select(payload.need),
  Timeline: select(payload.timeline),
  Message: richText(payload.message),
  Source: richText(payload.source),
  "Submitted At": {
    date: { start: new Date().toISOString() },
  },
});

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.NOTION_TOKEN || !env.NOTION_DATABASE_ID) {
    return Response.json(
      { message: "The intake form is not configured yet." },
      { status: 500, headers: jsonHeaders },
    );
  }

  let body: IntakePayload;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { message: "Please submit the form again." },
      { status: 400, headers: jsonHeaders },
    );
  }

  const payload = {
    name: textValue(body.name),
    email: textValue(body.email),
    company: textValue(body.company),
    role: textValue(body.role),
    need: textValue(body.need),
    timeline: textValue(body.timeline),
    message: textValue(body.message),
    source: textValue(body.source) || "theonsherpa.com contact form",
  };

  if (!payload.name || !isEmail(payload.email) || !payload.need || !payload.message) {
    return Response.json(
      { message: "Please fill out name, email, need, and message." },
      { status: 400, headers: jsonHeaders },
    );
  }

  const notionResponse = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.NOTION_TOKEN}`,
      "Content-Type": "application/json",
      "Notion-Version": env.NOTION_VERSION || "2022-06-28",
    },
    body: JSON.stringify({
      parent: { database_id: env.NOTION_DATABASE_ID },
      properties: buildNotionProperties(payload),
    }),
  });

  if (!notionResponse.ok) {
    const errorText = await notionResponse.text();
    console.error("Notion intake submission failed", errorText);
    return Response.json(
      { message: "The form could not reach Notion. Please email Evan directly." },
      { status: 502, headers: jsonHeaders },
    );
  }

  return Response.json({ ok: true }, { headers: jsonHeaders });
};

export const onRequest: PagesFunction<Env> = async () =>
  Response.json({ message: "Method not allowed" }, { status: 405, headers: jsonHeaders });
