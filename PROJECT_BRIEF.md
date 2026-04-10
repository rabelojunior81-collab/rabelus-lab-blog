# Blog Project: Rabelus Lab Blog

Build a complete Astro static blog with the following specifications:

## Style (MANDATORY - replicate exactly)

Use the olive terminal/military glassmorphism style from the provided CSS. Key rules:
- Background: `#101409` with subtle radar grid texture
- Text: `#f3f8e9` (creme), accents in olive (#8fb054, #afcb7d, #cde0ab)
- ALL borders: 0px border-radius (everything square, terminal aesthetic)
- Glass panels with `backdrop-filter: blur` and olive-tinted backgrounds
- NO purple/violet anywhere (Purple Ban rule)
- System fonts: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto
- Sticky header, left sidebar navigation, right TOC sidebar
- Responsive: hide sidebars on mobile

## Content Structure

Bilingual blog (PT-BR + EN) with:
- `src/content/blog/pt/` - Portuguese posts
- `src/content/blog/en/` - English posts  
- Language switcher in header
- Default language: PT-BR

## Post Format

Markdown with frontmatter:
```
---
title: ""
subtitle: ""
author: "Argenta Fenix"
date: "YYYY-MM-DD"
lang: "pt-BR" or "en"
slug: ""
tags: []
image: ""
---
```

## Features
- RSS feed (/rss.xml)
- Sitemap
- SEO meta tags (Open Graph, Twitter Card)
- Dark mode only (no toggle - always dark olive)
- Mobile responsive
- Post list on homepage (newest first)
- Tag-based filtering
- Reading time estimate

## Images

Copy these images into `public/images/`:
1. From `C:\Users\rabel\.openclaw\workspace\memory_system\media\canonical\images\validated\art_image_2026_04_09_0001_argenta-anthropomorphic.jpg` (use as hero/brand image)
2. From `C:\Users\rabel\.openclaw\workspace\memory_system\media\canonical\images\validated\art_image_2026_03_24_0006_simple-generation.png` (use in post if relevant)

## First Post Content

The first post markdown is at: `C:\Users\rabel\.openclaw\workspace\temp_blog_post_pt.md`
Copy it to `src/content/blog/pt/vivendo-dentro-da-stack.md`

Also create the English version at `src/content/blog/en/living-inside-the-stack.md` - translate the same post to English naturally.

## Configuration
- Site URL: `https://rabelus.com.br`
- Site name: "Rabelus Lab Blog"
- Description: "Pesquisa e Desenvolvimento AI-Born/Driven/First"
- Author: "Argenta Fenix"

## Deployment Target
Cloudflare Pages compatible - pure static output (no server-side rendering).

## File Structure
```
rabelus-lab-blog/
  astro.config.mjs
  package.json
  tsconfig.json
  public/
    images/
    favicon.svg
  src/
    layouts/
      BaseLayout.astro
      PostLayout.astro
    components/
      Header.astro
      Sidebar.astro
      TOC.astro
      PostCard.astro
      LanguageSwitcher.astro
      TagList.astro
    content/
      config.ts
      blog/pt/
      blog/en/
    pages/
      index.astro
      blog/[...slug].astro
      tags/[tag].astro
    styles/
      global.css  (the olive terminal theme from helper.html)
```

After creating everything:
1. Run `npm install`
2. Run `npm run build` to verify it works
3. Commit all files with git

When completely finished, run: openclaw system event --text "Done: Rabelus Lab Blog built successfully with Astro" --mode now
