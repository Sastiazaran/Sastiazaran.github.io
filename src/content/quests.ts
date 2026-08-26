import type { Quest } from '../types/content'

/**
 * Demo URLs are only the public apps he confirmed.
 * Never: kanji-learning-uif (SSO), kanji-reader.vercel.app,
 * suno-prompt-studio.vercel.app, or vercel.com/uif/casino-tracker (dashboard).
 */
export const quests: Quest[] = [
  {
    id: 'bionic-reading',
    status: 'live',
    featured: true,
    title: {
      en: 'Bionic Reading',
      es: 'Lector biónico',
    },
    summary: {
      en: 'Drop a PDF, Word, Markdown, or txt file and turn it into bionic reading — entirely in the browser.',
      es: 'Suelta un PDF, Word, Markdown o txt y conviértelo en lectura biónica, todo en el navegador.',
    },
    tech: ['TypeScript', 'Vite'],
    repositoryUrl: 'https://github.com/Sastiazaran/BionicReading',
    demoUrl: 'https://lectura-bionica.vercel.app',
  },
  {
    id: 'watchlist-movie-selector',
    status: 'live',
    featured: true,
    title: {
      en: 'Watchlist Movie Selector',
      es: 'Watchlist Movie Selector',
    },
    summary: {
      en: 'Local-first watchlist spinner. Import IMDb, Letterboxd, or MAL, then pick what to watch.',
      es: 'Ruleta local-first de watchlist. Importa IMDb, Letterboxd o MAL y elige qué ver.',
    },
    tech: ['TypeScript', 'Next.js'],
    repositoryUrl: 'https://github.com/Sastiazaran/WatchlistMovieSelector',
    demoUrl: 'https://watchlist-movie-selector.vercel.app',
  },
  {
    id: 'kanji-reader',
    status: 'live',
    featured: true,
    title: {
      en: 'KanjiReader',
      es: 'KanjiReader',
    },
    summary: {
      en: 'Gamified jōyō kanji learning: school-year worlds, mnemonic stories, quizzes, and Leitner SRS.',
      es: 'Aprendizaje gamificado de kanji jōyō: mundos por curso escolar, historias mnemotécnicas, quizzes y SRS Leitner.',
    },
    tech: ['React', 'TypeScript', 'Vite', 'Dexie'],
    repositoryUrl: 'https://github.com/Sastiazaran/KanjiReader',
    demoUrl: 'https://kanji-learning-sigma.vercel.app',
  },
  {
    id: 'lineup',
    status: 'live',
    featured: true,
    title: {
      en: 'Lineup',
      es: 'Lineup',
    },
    summary: {
      en: 'Daily sports-odds email for favorited teams. The web app is live; a custom domain for outbound email is still pending.',
      es: 'Email diario de cuotas para los equipos que marcas como favoritos. La app web está en línea; el dominio propio para el correo de salida todavía está pendiente.',
    },
    tech: ['TypeScript', 'Next.js'],
    repositoryUrl: 'https://github.com/Sastiazaran/casinoTracker',
    demoUrl: 'https://casino-tracker-uif.vercel.app',
  },
  {
    id: 'personal-finance-hub',
    status: 'local',
    title: {
      en: 'Personal Finance Hub',
      es: 'Personal Finance Hub',
    },
    summary: {
      en: 'Local-first finance hub: import account-statement PDFs, track MSI/debt, and see spending. No public URL.',
      es: 'Hub local de finanzas: importa estados de cuenta PDF, sigue MSI/deuda y ve tus gastos. Sin URL pública.',
    },
    tech: ['React', 'TypeScript', 'Vite', 'Dexie'],
    repositoryUrl: 'https://github.com/Sastiazaran/PersonalFinanceHub',
  },
  {
    id: 'suno-prompt-generator',
    status: 'local',
    title: {
      en: 'Suno Prompt Generator',
      es: 'Suno Prompt Generator',
    },
    summary: {
      en: 'Local Suno prompt studio: style prompt, lyrics, and a negative prompt. No public URL.',
      es: 'Estudio local de prompts para Suno: estilo, letras y prompt negativo. Sin URL pública.',
    },
    tech: ['TypeScript', 'Vite'],
    repositoryUrl: 'https://github.com/Sastiazaran/SunoPromptGenerator',
  },
]

export const featuredQuests = quests.filter((quest) => quest.featured)
