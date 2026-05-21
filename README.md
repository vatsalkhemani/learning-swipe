# learning-swipe

A swipe library for long-form deep dives. Replace mindless scrolling with structured learning across philosophy, history, science, economics, and the rest of the world worth knowing about.

## What it is

Most knowledge content online is either too shallow (Instagram captions, basic summaries) or too dense (textbooks, dry encyclopedias). The space in between, where you can actually understand a topic in five to ten minutes and come away genuinely smarter, is mostly missing.

learning-swipe fills that space. Each card is a ~1,000 word deep dive on one topic, long enough to teach you the fundamentals, the lineage, the modern evolution, what most people get wrong, and what to actually carry away. Short enough to read between coffees.

Pick a category. Swipe through articles. Read or listen.

## What's covered

115 cards across 12 categories. ~10 cards per category (5 in Religion).

- **Philosophy** — Stoicism, Existentialism, Ancient Greeks, Eastern thought, ethical frameworks, Confucianism, Marxism, Liberalism, Pragmatism, the mind-body problem
- **Religion** — Christianity, Islam, Hinduism, Buddhism, Judaism (history, beliefs, demographics, sects, modern debates for each)
- **Cognitive Science** — System 1 vs System 2, cognitive biases, heuristics, nudge theory, Cialdini's persuasion principles, memory, attention, flow states, the hedonic treadmill, motivated reasoning
- **Sciences** — Evolution, game theory, relativity/quantum/entropy, climate and energy, networks and complexity, DNA and CRISPR, the Standard Model, how vaccines work, the microbiome, climate feedbacks
- **Economics** — How modern money works, the 2008 crisis, Bitcoin in plain English, globalization and supply chains, Keynes vs Hayek, inflation, comparative advantage, VC and PE, the reshaped labor market, behavioral economics
- **Tech History** — The computing arc, Silicon Valley's origins, internet architecture, FAANG arcs, the AI moment, the Apple comeback, Linux and open source, the dotcom bubble, the mobile revolution, TSMC
- **Global History** — The 20th century, China's rise, Middle East 101, the EU, Ukraine and Gaza, the Cold War, WWII Pacific theater, the fall of the USSR, African decolonization, the British Empire
- **India** — Modern India, the political system, the economic story since 1991, caste/religion/diversity, foreign policy, pre-1991 License Raj, classical traditions, the Constitution, the Northeast and Kashmir, the tech industry rise
- **United States** — US history fast pass, the Constitution, parties and culture wars, race in America, Silicon Valley + Wall Street, the American Revolution, the Civil War, the Great Depression + New Deal, the 1960s, immigration
- **Geography** — Mental world map, the US states that matter, climate zones, rivers/mountains/currents, geography and geopolitics, why Russia is the way it is, why India is the way it is, the Mediterranean, the Pacific Rim, Africa's geography
- **Health** — Sleep, exercise, nutrition, stress and mental health, habit formation, metabolic syndrome, aging biology, why diets fail, vaccines and immunity, fitness mental models
- **Culture** — US sports, canonical films, canonical TV, music history, US stand-up comedy, Indian cinema, global music genres, modern literature, fashion as cultural signal, sports beyond US

## How a card is shaped

Every card is built to be both scannable and deep:

- Opens with what the topic is and why it actually matters
- Walks through how it started, with real names and dates
- Lays out the key ideas, with examples woven in where they help understanding
- Covers related ideas, debates, and modern descendants where they exist
- Calls out the common misconceptions
- Closes with what to actually carry away

No bullet points trying to summarize a continent. No academic prose trying to impress. Just a knowledgeable friend explaining the topic the way they would in person.

## Features

- **Swipe between cards** in any category. Touch swipe on phone, arrow keys on desktop.
- **Tap to listen.** Every card has a built-in text-to-speech button using your browser's Web Speech API. Tap once to play or pause, double-tap to stop. Works on iOS Safari, Android Chrome, and desktop browsers.
- **Mobile-first typography.** Paper-like cream palette with auto dark mode, serif body type, generous line-height, optimized for phone reading.
- **PWA-ready.** Add it to your home screen for a native app feel, no app store required.
- **Static and fast.** No backend, no database, no tracking, no analytics. Cards are markdown rendered at request time.

## Run it locally

```bash
git clone https://github.com/<your-username>/learning-swipe.git
cd learning-swipe
npm install
npm run dev
```

Open http://localhost:3000.

## Add your own cards

Drop a markdown file in `content/<category>/<slug>.md` with frontmatter:

```yaml
---
title: "Card title"
subtopic: "Category · Subtopic"
hook: "One-line hook explaining why this matters."
order: 6
---
```

Then write the body. Use `##` for section headings. The card list rebuilds automatically; no manual indexing.

## Deploy to Vercel

Push the repo to GitHub, then import it on [vercel.com](https://vercel.com). Vercel detects Next.js, builds, and serves. Once it's live, open the URL in Safari or Chrome on your phone and "Add to Home Screen" to install the PWA.

## Content principles (if you add your own cards)

- Target ~1,000 words. Not too short, not verbose.
- Bullets do most of the work. Paragraphs only for the "What is X" intro and short examples woven inside bulleted sections.
- Voice: a knowledgeable friend explaining simply. Not academic. Not quippy.
- Specific over general. Real names, dates, numbers. Bold proper nouns the first time.
- Section headings flex to the topic. Always open with "What is X and why it matters." After that, pick what the topic actually calls for.

## Stack

Next.js 14 (App Router), React 18, Tailwind CSS, react-markdown, react-swipeable, gray-matter. No external APIs at runtime.

## License

MIT.
