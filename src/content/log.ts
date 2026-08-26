import type { LogEntry } from '../types/content'

/** His IRL side quests — first person, not a guild feed. */
export const logEntries: LogEntry[] = [
  {
    id: 'night-drive-ost',
    status: 'soundtrack',
    title: {
      en: 'Night drive playlist locked in',
      es: 'Playlist de manejo nocturno lista',
    },
    detail: {
      en: 'The songs that turn empty roads into a cinematic main quest.',
      es: 'Las canciones que convierten carreteras vacías en una misión principal cinematográfica.',
    },
    date: '2026-07-10',
  },
  {
    id: 'sleep-ritual',
    status: 'active',
    title: {
      en: 'Protect a 7-hour sleep streak',
      es: 'Proteger una racha de 7 horas de sueño',
    },
    detail: {
      en: 'Recovery is part of the build — not optional DLC.',
      es: 'La recuperación es parte del build — no es DLC opcional.',
    },
    date: '2026-07-15',
  },
  {
    id: 'bench-press-progress',
    status: 'active',
    title: {
      en: 'Add 5 kg to bench press',
      es: 'Subir 5 kg en press de banca',
    },
    detail: {
      en: 'Consistent progressive overload this training block. Log every session.',
      es: 'Sobrecarga progresiva consistente en este bloque. Registrar cada sesión.',
    },
    date: '2026-07-01',
  },
  {
    id: 'ramen-discovery',
    status: 'discovery',
    title: {
      en: 'Learned homemade ramen broth',
      es: 'Aprendí a hacer caldo de ramen casero',
    },
    detail: {
      en: 'Patience, bones, and aroma — cooking as a side quest with edible loot.',
      es: 'Paciencia, huesos y aroma — cocinar como side quest con loot comestible.',
    },
    date: '2026-06-22',
  },
  {
    id: 'fmab-complete',
    status: 'completed',
    title: {
      en: 'Finished Fullmetal Alchemist: Brotherhood',
      es: 'Terminé Fullmetal Alchemist: Brotherhood',
    },
    detail: {
      en: 'A classic arc completed — cost, growth, and found family.',
      es: 'Un clásico completado — costo, crecimiento y familia elegida.',
    },
    date: '2026-06-18',
  },
  {
    id: 'data-science-arc',
    status: 'completed',
    title: {
      en: 'Deepened the Data Science skill branch',
      es: 'Profundicé la rama de Data Science',
    },
    detail: {
      en: 'Postgraduate work stacking analysis on top of systems and graphics.',
      es: 'Posgrado sumando análisis sobre sistemas y gráficos.',
    },
    date: '2026-05-01',
  },
]

export function latestLog(limit = 3) {
  return [...logEntries]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit)
}
