# Workshop example images

Place workshop example images in this folder. Add their paths, descriptive alt
text, and optional captions to the matching topic in `src/data/workshops.ts`:

```ts
images: [
  {
    src: "/workshops/branching-example.webp",
    alt: "Describe what the example demonstrates",
    caption: "Optional short explanation",
  },
],
```

Use WebP, PNG, or JPEG. Prefer compressed images about 1200 pixels wide.
Images retain their proportions and stack on mobile. Topics with no images
display only their description. Pricing and the offering copy are in
`src/pages/services.astro`.
