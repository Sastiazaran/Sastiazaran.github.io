import type { Quest } from '../types/content'

/**
 * Featured personal projects only. Verified against public GitHub READMEs
 * (August 2026). Class homework and the rest of the public repos stay off this list.
 */
export const quests: Quest[] = [
  {
    id: 'kanji-reader',
    status: 'in-progress',
    title: {
      en: 'KanjiReader',
      es: 'KanjiReader',
    },
    summary: {
      en: 'Open-source gamified kanji learning: school-year worlds, mnemonic stories, quizzes, and Leitner SRS in the browser.',
      es: 'App open source para aprender kanji jugando: mundos por curso escolar, historias mnemotécnicas, quizzes y SRS Leitner en el navegador.',
    },
    tech: ['React', 'TypeScript', 'Vite', 'Dexie'],
    repositoryUrl: 'https://github.com/Sastiazaran/KanjiReader',
  },
  {
    id: 'personal-finance-hub',
    status: 'in-progress',
    title: {
      en: 'Personal Finance Hub',
      es: 'Personal Finance Hub',
    },
    summary: {
      en: 'Local-first finance hub: import account-statement PDFs, categorize spending, and project debts. Data stays in the browser.',
      es: 'Hub local de finanzas: importa estados de cuenta en PDF, categoriza gastos y proyecta deudas. Los datos se quedan en el navegador.',
    },
    tech: ['React', 'TypeScript', 'Vite', 'Dexie'],
    repositoryUrl: 'https://github.com/Sastiazaran/PersonalFinanceHub',
  },
  {
    id: 'bionic-reading',
    status: 'live',
    title: {
      en: 'Bionic Reading',
      es: 'Lector biónico',
    },
    summary: {
      en: 'Drop a PDF, Word, Markdown, or text file and turn it into bionic reading — entirely in the browser.',
      es: 'Suelta un PDF, Word, Markdown o texto y conviértelo en lectura biónica, todo en el navegador.',
    },
    tech: ['TypeScript', 'Vite'],
    repositoryUrl: 'https://github.com/Sastiazaran/BionicReading',
    demoUrl: 'https://lectura-bionica.vercel.app',
  },
  {
    id: 'watchlist-movie-selector',
    status: 'live',
    title: {
      en: 'Watchlist Movie Selector',
      es: 'Watchlist Movie Selector',
    },
    summary: {
      en: 'Local-first spinner for when you do not know what to watch. Movies, TV, anime, and cartoons stay in this browser.',
      es: 'Ruleta local-first para cuando no sabes qué ver. Cine, series, anime y caricaturas se quedan en este navegador.',
    },
    tech: ['TypeScript', 'Next.js'],
    repositoryUrl: 'https://github.com/Sastiazaran/WatchlistMovieSelector',
    demoUrl: 'https://watchlist-movie-selector.vercel.app',
  },
  {
    id: 'meeting-assistant',
    status: 'in-progress',
    title: {
      en: 'Meeting Assistant',
      es: 'Meeting Assistant',
    },
    summary: {
      en: 'Local open-source meeting helper: capture system audio, transcribe with Whisper, summarize with Ollama, export notes.',
      es: 'Asistente de reuniones local y open source: captura el audio del sistema, transcribe con Whisper, resume con Ollama y exporta notas.',
    },
    tech: ['Python', 'Whisper', 'Ollama'],
    repositoryUrl: 'https://github.com/Sastiazaran/TextToSpeechRecognition',
  },
  {
    id: 'suno-prompt-generator',
    status: 'in-progress',
    title: {
      en: 'Suno Prompt Generator',
      es: 'Suno Prompt Generator',
    },
    summary: {
      en: 'Local studio that turns a song brief into Suno-ready packages: style prompt, lyrics, and a negative prompt.',
      es: 'Estudio local que convierte un brief de canción en paquetes para Suno: prompt de estilo, letras y prompt negativo.',
    },
    tech: ['TypeScript', 'Vite'],
    repositoryUrl: 'https://github.com/Sastiazaran/SunoPromptGenerator',
  },
]
