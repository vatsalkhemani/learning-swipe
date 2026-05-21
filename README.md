# learning-swipe

A swipe library of long-form deep dives across broadening topics. Built to replace Instagram with something that actually makes you smarter.

## What it is

- **11 categories** from `broadening.md`: Philosophy, Cognitive Science, Sciences, Economics, Tech History, Global History, India, United States, Geography, Health, Culture.
- **5 cards per category** (55 seed cards), each ~1,000 words.
- **Bullet-highlight-then-prose** format. Section bullets up top scan in seconds; prose below reads on demand.
- **Swipe horizontally** (or arrow keys) to move between cards within a topic.
- **Tap-to-listen** uses the browser's Web Speech API. Single tap to play/pause, double tap to stop.
- **No runtime LLM, no backend.** Cards are static markdown in `content/`. Everything is generated up front, served as a static site.

## Stack

- Next.js 14 (App Router) + React 18
- Tailwind CSS for the base + custom CSS for the typography (Charter serif body, Söhne-fallback sans for display)
- `react-markdown` + `remark-gfm` for rendering
- `react-swipeable` for gestures
- `gray-matter` for frontmatter

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding more cards

Drop a markdown file into `content/<category>/<slug>.md` with frontmatter:

```yaml
---
title: "Card title"
subtopic: "Category · Subtopic"
hook: "One-line hook explaining why this matters."
order: 6
---
```

Then body in markdown. Section headings = `##`. Each section starts with a bulleted highlight tile (a `<ul>` that immediately follows the `<h2>`). Body bullets, paragraphs, examples below.

The card list rebuilds automatically on next request — no manual indexing.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to vercel.com, import the repo, accept defaults.
3. Vercel auto-deploys on every push.
4. Add it to your phone home screen via Safari/Chrome "Add to Home Screen" for the PWA install.

## Content rules (for future cards)

- ~1,000 words per card. Not too short, not verbose.
- Bullets do most of the work. Paragraphs only for the "What is X" intro and short examples woven inside bulleted sections.
- Voice: a knowledgeable friend explaining simply. Not academic. Not quippy.
- Specific over general. Real names, dates, numbers. Bold proper nouns the first time.
- No em dashes (—). Use commas, periods, parentheses.
- No AI-tells: moreover, furthermore, ultimately, in essence, fundamentally, delve into, navigate, tapestry, landscape, realm. No rule-of-three flourishes. No "not X, but Y." Name people instead of "scholars argue."
- Section headings flex to the topic. Always start with "What is X and why it matters." After that, pick what the topic actually calls for.
