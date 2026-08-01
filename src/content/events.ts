import type { MonthlyEvent } from '../types/content'

export const monthlyEvents: MonthlyEvent[] = [
  {
    id: 'july-train',
    title: {
      en: '30 days of training',
      es: '30 días entrenando',
    },
    description: {
      en: 'Show up for your body — any honest session counts. Log it in Level Up.',
      es: 'Aparece por tu cuerpo — cualquier sesión honesta cuenta. Regístralo en Level Up.',
    },
    month: { en: 'This month', es: 'Este mes' },
  },
]

export const eventIdeas: MonthlyEvent[] = [
  {
    id: 'classic-anime',
    title: { en: 'Watch a classic anime', es: 'Ver un anime clásico' },
    description: {
      en: 'Pick one landmark series and finish the arc together.',
      es: 'Elige una serie emblemática y termina el arco juntos.',
    },
    month: { en: 'Upcoming', es: 'Próxima' },
  },
  {
    id: 'read-a-book',
    title: { en: 'Read one book', es: 'Leer un libro' },
    description: {
      en: 'Any genre. Share one insight that changed your thinking.',
      es: 'Cualquier género. Comparte una idea que te cambió el chip.',
    },
    month: { en: 'Upcoming', es: 'Próxima' },
  },
  {
    id: 'album-a-day',
    title: {
      en: 'One full album a day',
      es: 'Un álbum completo cada día',
    },
    description: {
      en: 'Deep listening only — no shuffle, finish the record.',
      es: 'Escucha profunda — sin shuffle, termina el disco.',
    },
    month: { en: 'Upcoming', es: 'Próxima' },
  },
]
