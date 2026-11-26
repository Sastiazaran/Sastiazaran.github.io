import type { Quest, QuestMedia } from '../types/content'
import { publicAsset } from './assets'

/**
 * Demo URLs are only the public apps he confirmed.
 * Never: kanji-learning-uif (SSO), kanji-reader.vercel.app,
 * suno-prompt-studio.vercel.app, or vercel.com/uif/casino-tracker (dashboard).
 * Investigación deportiva has a private repo — live site only.
 */
function preview(id: string): QuestMedia {
  return {
    poster: publicAsset(`previews/${id}-desktop.webp`),
    mobilePoster: publicAsset(`previews/${id}-mobile.webp`),
    video: publicAsset(`previews/${id}.mp4`),
  }
}

export const quests: Quest[] = [
  {
    id: 'bloodline',
    status: 'live',
    featured: true,
    title: {
      en: 'Bloodline: The Interview Castle',
      es: 'Bloodline: The Interview Castle',
    },
    summary: {
      en: 'Keyboard pixel-art RPG for interview practice. Walk a castle, open chests, and duel guardians with questions and hands-on puzzles in DSA, System Design, SQL, Good Practices, or an endless mixed Bloodline.',
      es: 'RPG de entrevistas en pixel art, con teclado. Recorre un castillo, abre cofres y te enfrentas a guardianes con preguntas y puzzles de DSA, System Design, SQL, buenas prácticas o un Bloodline mixto sin final.',
    },
    tech: ['Next.js', 'React', 'Tailwind CSS', 'HTML Canvas'],
    repositoryUrl: 'https://github.com/Sastiazaran/InfinityInterview',
    demoUrl: 'https://infinityinterview.vercel.app',
    media: preview('bloodline'),
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
      en: 'Open-source kanji practice: school-year maps ordered by real usage, mnemonic stories, quizzes, and Leitner spaced repetition stored in the browser.',
      es: 'Práctica de kanji de código abierto: mapas por curso escolar ordenados por uso real, historias mnemotécnicas, quizzes y repetición espaciada Leitner en el navegador.',
    },
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Dexie', 'Vitest'],
    repositoryUrl: 'https://github.com/Sastiazaran/KanjiReader',
    demoUrl: 'https://kanji-learning-sigma.vercel.app',
    media: preview('kanji'),
  },
  {
    id: 'bionic-reading',
    status: 'live',
    featured: true,
    title: {
      en: 'Bionic Reading',
      es: 'Lectura biónica',
    },
    summary: {
      en: 'Turns PDF, Word, Markdown, or plain text into bionic reading entirely in the browser. Nothing is uploaded.',
      es: 'Convierte PDF, Word, Markdown o texto a lectura biónica por completo en el navegador. No se sube ningún archivo.',
    },
    tech: ['TypeScript', 'Vite', 'pdf.js', 'Mammoth', 'jsPDF', 'Vitest'],
    repositoryUrl: 'https://github.com/Sastiazaran/BionicReading',
    demoUrl: 'https://lectura-bionica.vercel.app',
    media: preview('bionic'),
  },
  {
    id: 'biela',
    status: 'live',
    featured: true,
    title: {
      en: 'Biela',
      es: 'Biela',
    },
    summary: {
      en: 'Interactive 3D motorcycle: exploded view, animated engines, drivetrain, airflow, and bike types. The geometry is generated in the browser.',
      es: 'Moto 3D interactiva: despiece, motores animados, transmisión, aire y tipos de moto. La geometría se genera en el navegador.',
    },
    tech: ['Next.js', 'React Three Fiber'],
    repositoryUrl: 'https://github.com/Sastiazaran/Biela',
    demoUrl: 'https://biela-uif.vercel.app',
    media: preview('biela'),
  },
  {
    id: 'sports-research',
    status: 'live',
    featured: true,
    title: {
      en: 'Historical sports research',
      es: 'Investigación deportiva histórica',
    },
    summary: {
      en: 'Closing-odds research for soccer, NBA, NFL, and MLB: win rate and flat-bet ROI by team, and calibration by odds range. The NBA game simulator is at /nba/simulator; that page says it does not beat the closing line.',
      es: 'Investigación de cuotas de cierre para fútbol, NBA, NFL y MLB: porcentaje de victorias y ROI de apuesta plana por equipo, y calibración por rango de momios. El simulador de la NBA está en /nba/simulator; esa página dice que no le gana a la línea de cierre.',
    },
    tech: ['Next.js', 'React'],
    demoUrl: 'https://investigacion-deportiva-historica.vercel.app',
    media: preview('sports'),
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
      en: 'Local-first watchlist wheel. Import IMDb, Letterboxd, or MyAnimeList, filter by type and streaming service, then spin. Posters come from TMDb; the list stays in this browser.',
      es: 'Ruleta local-first de watchlist. Importa IMDb, Letterboxd o MyAnimeList, filtra por tipo y servicio, y gira. Los pósters salen de TMDb; la lista se queda en este navegador.',
    },
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TMDb API'],
    repositoryUrl: 'https://github.com/Sastiazaran/WatchlistMovieSelector',
    demoUrl: 'https://watchlist-movie-selector.vercel.app',
    media: preview('watchlist'),
  },
  {
    id: 'gold-model',
    status: 'local',
    featured: true,
    title: {
      en: 'GoldModel',
      es: 'GoldModel',
    },
    summary: {
      en: 'Econometric fair-value analysis of gold, not a price predictor: real yield, the dollar, Brent, VIX, inflation, central-bank buying, GLD holdings, and a geopolitical risk index, with rolling coefficients, Engle-Granger and Johansen tests, and walk-forward Ridge and gradient boosting versus a random walk — also in MXN per gram. Out-of-sample R² versus a random walk is slightly negative. No live demo.',
      es: 'Análisis econométrico de valor justo del oro, no un predictor de precio: rendimiento real, dólar, Brent, VIX, inflación, compras de oro de bancos centrales, tenencias de GLD y un índice de riesgo geopolítico, con coeficientes en ventana móvil, pruebas de Engle-Granger y Johansen, y pronósticos walk-forward de Ridge y gradient boosting frente a un paseo aleatorio — también en MXN por gramo. El R² fuera de muestra frente al paseo aleatorio es ligeramente negativo. Sin demo en línea.',
    },
    tech: ['Python', 'pandas', 'statsmodels', 'scikit-learn'],
    repositoryUrl: 'https://github.com/Sastiazaran/GoldModel',
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
