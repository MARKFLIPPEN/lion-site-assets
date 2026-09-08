# lion-site-assets

Stylesheet and behaviour script for the LION Specialty website, hosted here so the
Webflow site can load them from a CDN instead of pasting 14 KB into a code field.

- `lion.css` — the shared stylesheet (design system, layout, components, responsive rules).
- `lion.js` — small behaviour script: cycling hero word, one-open-at-a-time FAQ, mobile nav toggle.

Source of truth for the design is the Figma file; the local build lives outside this repo.
Contains no client data, no copy, and no images.

## Use in Webflow

Site settings, Custom code, Head code:

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/MARKFLIPPEN/lion-site-assets@main/lion.css">

Footer code:

    <script src="https://cdn.jsdelivr.net/gh/MARKFLIPPEN/lion-site-assets@main/lion.js"></script>

jsDelivr caches by tag. After changing a file, purge with
`https://purge.jsdelivr.net/gh/MARKFLIPPEN/lion-site-assets@main/lion.css`
