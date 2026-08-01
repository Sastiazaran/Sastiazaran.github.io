# Side Quest

Personal HQ and community face for **Side Quest** — build your character IRL.

Live site: [https://Sastiazaran.github.io](https://Sastiazaran.github.io)

Discord: [https://discord.gg/NJPkYEHsP](https://discord.gg/NJPkYEHsP)

## Stack

- React 19 + TypeScript + Vite
- HashRouter for GitHub Pages
- Local content (TS/JSON) + bilingual EN/ES

## Develop

```bash
npm install
npm run dev
```

## Build / Pages

```bash
npm run build        # local production build
npm run build:pages  # base path `/` for user site
npm run preview
```

GitHub Actions deploys on push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Edit content

| File | What |
|------|------|
| `src/content/site.ts` | Brand, Discord, SEO |
| `src/content/pillars.ts` | Community pillars |
| `src/content/quests.ts` | Quest log entries |
| `src/content/manifesto.ts` | Manifesto copy |
| `src/content/ranks.ts` | Guild ranks |
| `src/content/events.ts` | Monthly missions |
| `src/content/profile.ts` | Founder bio |
| `src/content/projects.json` | GitHub projects |
| `src/i18n/dictionaries.ts` | UI chrome EN/ES |
