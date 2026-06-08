# The Onsherpa Site

Custom Astro site for The Onsherpa, designed for Cloudflare Pages with a Notion-backed intake form.

## Local Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Cloudflare Pages

Use these build settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Functions directory: `functions`

## Notion Intake Setup

Create a Notion internal integration and share the target CRM database with that integration. Then set these Cloudflare Pages environment variables:

- `NOTION_TOKEN`: the integration secret
- `NOTION_DATABASE_ID`: the target database ID
- `NOTION_VERSION`: optional; defaults to `2022-06-28`

The form posts to `/api/intake`, implemented as a Cloudflare Pages Function in `functions/api/intake.ts`.

Expected Notion database properties:

- `Name` as title
- `Email` as email
- `Company` as rich text
- `Role` as rich text
- `Need` as select
- `Timeline` as select
- `Message` as rich text
- `Source` as rich text
- `Submitted At` as date

If your CRM uses different property names, update `buildNotionProperties` in the intake function.

## Custom Feature Catalog

Custom feature cards are managed in `src/data/features.ts`. Add new features there with:

- `slug`: stable lowercase id, used for media naming
- `name`: display name
- `href`: public Onshape document URL
- `summary`: short one-sentence description
- `category`: one of the existing catalog categories
- `media`: optional GIF/video path, for example `/features/attractor-pattern.gif`
- `highlight`: whether it appears in the featured card grid

Put exported GIFs or short demo videos in `public/features/`. Keep filenames aligned with the feature slug so updating cards stays mechanical.

## Client Logos

The homepage “I’ve been trusted by” section is managed in `src/data/clients.ts`.

Put logo files in `public/clients/`, then add entries like:

```ts
{ name: "Client Name", logo: "/clients/client-name.svg", href: "https://example.com" }
```

SVG logos are preferred. The site renders SVG client logos as CSS masks, so they automatically become the same near-white color in the scrolling gallery. PNGs work too, but they are approximated with a CSS filter and may not match as perfectly.
