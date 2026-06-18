type Env = {
  NOTION_DATABASE_ID?: string;
  NOTION_TOKEN?: string;
  NOTION_VERSION?: string;
};

type IntakePayload = {
  company?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  message?: string;
  onshapeTeamSize?: string;
  phone?: string;
};

type NotionProperty =
  | { title: Array<{ text: { content: string } }> }
  | { email: string }
  | { number: number | null }
  | { phone_number: string | null }
  | { rich_text: Array<{ text: { content: string } }> };

const json = (body: unknown, init?: ResponseInit) =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

const asString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const richText = (content: string): NotionProperty => ({
  rich_text: content ? [{ text: { content } }] : [],
});

const title = (content: string): NotionProperty => ({
  title: [{ text: { content } }],
});

const numberValue = (content: string): NotionProperty => {
  if (!content) return { number: null };

  const value = Number(content);
  return Number.isFinite(value) ? { number: value } : { number: null };
};

export const onRequestPost: PagesFunction<Env> = async ({ env, request }) => {
  const token = env.NOTION_TOKEN;
  const databaseId = env.NOTION_DATABASE_ID;
  const notionVersion = env.NOTION_VERSION || "2022-06-28";

  if (!token || !databaseId) {
    return json({ message: "The contact form is not configured yet." }, { status: 500 });
  }

  let payload: IntakePayload;

  try {
    payload = (await request.json()) as IntakePayload;
  } catch {
    return json({ message: "The form submission could not be read." }, { status: 400 });
  }

  const firstName = asString(payload.firstName);
  const lastName = asString(payload.lastName);
  const email = asString(payload.email);
  const message = asString(payload.message);
  const company = asString(payload.company);
  const phone = asString(payload.phone);
  const onshapeTeamSize = asString(payload.onshapeTeamSize);

  if (!firstName || !lastName || !email || !message) {
    return json({ message: "Please complete the required fields." }, { status: 400 });
  }

  const properties: Record<string, NotionProperty> = {
    "First name": title(firstName),
    "Last name": richText(lastName),
    "Company name": richText(company),
    Email: { email },
    Phone: { phone_number: phone || null },
    "Onshape team size": numberValue(onshapeTeamSize),
    "What’s on your mind?": richText(message),
  };

  const response = await fetch("https://api.notion.com/v1/pages", {
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": notionVersion,
    },
    method: "POST",
  });

  if (!response.ok) {
    const error = (await response.json().catch(() => null)) as { message?: string } | null;
    console.error("Notion intake submission failed", error || response.statusText);

    return json(
      { message: "The form could not be sent. Please email Evan directly." },
      { status: 502 },
    );
  }

  return json({ message: "Thanks. Your note landed, and I will follow up soon." });
};

export const onRequestGet: PagesFunction<Env> = () =>
  json({ message: "Method not allowed." }, { status: 405 });
