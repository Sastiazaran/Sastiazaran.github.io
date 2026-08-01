import type { Quest } from '../types/content'

export const quests: Quest[] = [
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
    pillarSlug: 'level-up',
    date: '2026-07-01',
  },
  {
    id: 'fmab-complete',
    status: 'completed',
    title: {
      en: 'Finished Fullmetal Alchemist: Brotherhood',
      es: 'Terminé Fullmetal Alchemist: Brotherhood',
    },
    detail: {
      en: 'A classic arc completed — themes of cost, growth, and found family.',
      es: 'Un clásico completado — temas de costo, crecimiento y familia elegida.',
    },
    pillarSlug: 'side-quests',
    date: '2026-06-18',
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
    pillarSlug: 'exploration',
    date: '2026-06-22',
  },
  {
    id: 'night-drive-ost',
    status: 'soundtrack',
    title: {
      en: 'Night drive playlist locked in',
      es: 'Playlist de manejo nocturno lista',
    },
    detail: {
      en: 'The songs that turn empty roads into cinematic main quests.',
      es: 'Las canciones que convierten carreteras vacías en misiones principales cinematográficas.',
    },
    pillarSlug: 'soundtrack',
    date: '2026-07-10',
  },
  {
    id: 'side-quest-site',
    status: 'xp',
    title: {
      en: 'Shipped the Side Quest HQ site',
      es: 'Publiqué el sitio HQ de Side Quest',
    },
    detail: {
      en: 'Turned a personal footprint into a community philosophy on GitHub Pages.',
      es: 'Convertí una huella personal en una filosofía de comunidad en GitHub Pages.',
    },
    pillarSlug: 'skill-tree',
    date: '2026-07-31',
  },
  {
    id: 'sleep-ritual',
    status: 'active',
    title: {
      en: 'Protect a 7-hour sleep streak',
      es: 'Proteger una racha de 7 horas de sueño',
    },
    detail: {
      en: 'Recovery is part of Level Up — not optional DLC.',
      es: 'La recuperación es parte de Level Up — no es DLC opcional.',
    },
    pillarSlug: 'level-up',
    date: '2026-07-15',
  },
  {
    id: 'data-science-arc',
    status: 'xp',
    title: {
      en: 'Deepened the Data Science skill branch',
      es: 'Profundicé la rama de Data Science',
    },
    detail: {
      en: 'Postgraduate arc stacking analysis skills onto systems + graphics.',
      es: 'Arco de posgrado sumando análisis sobre sistemas + gráficos.',
    },
    pillarSlug: 'skill-tree',
    date: '2026-05-01',
  },
  {
    id: 'reflection-character',
    status: 'discovery',
    title: {
      en: 'Reflection: side quests rewrite the main plot',
      es: 'Reflexión: las side quests reescriben la trama principal',
    },
    detail: {
      en: 'Hobbies are not distractions when they compound into identity.',
      es: 'Los hobbies no son distracciones cuando se acumulan en identidad.',
    },
    pillarSlug: 'guild-hall',
    date: '2026-07-20',
  },
]

export function latestQuests(limit = 4) {
  return [...quests]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit)
}
