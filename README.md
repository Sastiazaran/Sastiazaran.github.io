# Sebastián Astiazarán — side quests

Personal site for **Sebastián Astiazarán** (Guadalajara): who he is, and a short list of his own side quests.

Live site: [https://sastiazaran.github.io](https://sastiazaran.github.io)

This repo (`Sastiazaran.github.io`) is what GitHub Pages serves. The Expo app in [SideQuest](https://github.com/Sastiazaran/SideQuest) is a separate companion — not the source of this website.

## Stack

- React 19 + TypeScript + Vite
- HashRouter for GitHub Pages
- Local content (TS) + bilingual EN/ES

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
| `src/content/site.ts` | Tagline and SEO |
| `src/content/profile.ts` | Name, bio, skills, social links |
| `src/content/quests.ts` | Featured personal projects |
| `src/i18n/dictionaries.ts` | UI chrome EN/ES |
