# Kenya AI Bill 2026 Explorer

An interactive web application for exploring Kenya's Artificial Intelligence Bill 2026 — modelled after [artificialintelligenceact.eu](https://artificialintelligenceact.eu/).

## Features

- **Home** — Bill overview, key statistics, legislative timeline
- **Bill Explorer** — All 37 sections, searchable and filterable by part and topic tag
- **Risk Classifier** — Step-by-step tool to determine how an AI use case would be classified
- **Glossary** — All statutory definitions from Section 2, plus contextual terms

## Tech Stack

- React 18
- React Router v6
- Google Fonts (DM Serif Display, DM Sans, Space Mono)
- Pure CSS (no UI library dependencies)

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm install
npx vercel
```

Follow the prompts. Vercel will auto-detect Create React App and configure the build.

### Option 2: GitHub + Vercel Dashboard

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects CRA settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
5. Click Deploy

The `vercel.json` file handles SPA routing so all page URLs resolve correctly.

## Local Development

```bash
npm install
npm start
```

Opens at http://localhost:3000

## Data

All bill content is in `src/data.js`. To update or expand coverage, edit the `parts` array. Each section supports:
- `content` — summary text
- `highlights` — key bullet points
- `penalties` — structured penalty tables
- `riskLevels` — risk tier visualisation
- `definitions` — glossary entries
- `tags` — topic tags for filtering

## Source

Kenya Gazette Supplement No. 15 (Senate Bills No. 4), 19 February 2026.  
Sponsored by Senator Karen Nyamu.
