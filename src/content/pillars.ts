import type { Pillar } from '../types/content'

export const pillars: Pillar[] = [
  {
    slug: 'level-up',
    icon: 'level-up',
    title: { en: 'Level Up', es: 'Level Up' },
    short: {
      en: 'Body, habits, and health.',
      es: 'Cuerpo, hábitos y salud.',
    },
    description: {
      en: 'Everything related to training the vessel — gym, nutrition, sleep, running, and the rituals that keep you sharp.',
      es: 'Todo lo relacionado con entrenar el cuerpo — gym, nutrición, sueño, running y los rituales que te mantienen afilado.',
    },
    topics: [
      { en: 'Gym', es: 'Gym' },
      { en: 'Nutrition', es: 'Nutrición' },
      { en: 'Health', es: 'Salud' },
      { en: 'Running', es: 'Running' },
      { en: 'Habits', es: 'Hábitos' },
      { en: 'Sleep', es: 'Sueño' },
    ],
  },
  {
    slug: 'skill-tree',
    icon: 'skill-tree',
    title: { en: 'Skill Tree', es: 'Árbol de habilidades' },
    short: {
      en: 'Learn, build, ship.',
      es: 'Aprende, construye, publica.',
    },
    description: {
      en: 'Programming, AI, languages, finance, productivity, and books — skills that stack into a stronger character sheet.',
      es: 'Programación, IA, idiomas, finanzas, productividad y libros — habilidades que suman a una ficha de personaje más fuerte.',
    },
    topics: [
      { en: 'Programming', es: 'Programación' },
      { en: 'AI', es: 'IA' },
      { en: 'Languages', es: 'Idiomas' },
      { en: 'Finance', es: 'Finanzas' },
      { en: 'Productivity', es: 'Productividad' },
      { en: 'Books', es: 'Libros' },
    ],
  },
  {
    slug: 'side-quests',
    icon: 'side-quests',
    title: { en: 'Side Quests', es: 'Side Quests' },
    short: {
      en: 'Stories, games, screens.',
      es: 'Historias, juegos, pantallas.',
    },
    description: {
      en: 'Anime, manga, gaming, movies, and series — entertainment that still shapes who you become.',
      es: 'Anime, manga, gaming, películas y series — entretenimiento que igual moldea quién te conviertes.',
    },
    topics: [
      { en: 'Anime', es: 'Anime' },
      { en: 'Manga', es: 'Manga' },
      { en: 'Gaming', es: 'Gaming' },
      { en: 'Movies', es: 'Películas' },
      { en: 'Series', es: 'Series' },
    ],
  },
  {
    slug: 'soundtrack',
    icon: 'soundtrack',
    title: { en: 'Soundtrack', es: 'Soundtrack' },
    short: {
      en: 'Music that moves the journey.',
      es: 'Música que mueve el viaje.',
    },
    description: {
      en: 'Playlists, albums, instruments, and production — the audio layer of every quest.',
      es: 'Playlists, álbumes, instrumentos y producción — la capa de audio de cada quest.',
    },
    topics: [
      { en: 'Playlists', es: 'Playlists' },
      { en: 'Albums', es: 'Álbumes' },
      { en: 'Instruments', es: 'Instrumentos' },
      { en: 'Production', es: 'Producción' },
    ],
  },
  {
    slug: 'exploration',
    icon: 'exploration',
    title: { en: 'Exploration', es: 'Exploration' },
    short: {
      en: 'Places, food, frames.',
      es: 'Lugares, comida, encuadres.',
    },
    description: {
      en: 'Travel, photography, cafés, restaurants, and nature — experience as its own skill tree.',
      es: 'Viajes, fotografía, cafés, restaurantes y naturaleza — la experiencia como su propio árbol de habilidades.',
    },
    topics: [
      { en: 'Travel', es: 'Viajes' },
      { en: 'Photography', es: 'Fotografía' },
      { en: 'Cafés', es: 'Cafés' },
      { en: 'Restaurants', es: 'Restaurantes' },
      { en: 'Nature', es: 'Naturaleza' },
    ],
  },
  {
    slug: 'guild-hall',
    icon: 'guild-hall',
    title: { en: 'Guild Hall', es: 'Guild Hall' },
    short: {
      en: 'The community campfire.',
      es: 'La hoguera de la comunidad.',
    },
    description: {
      en: 'General chat, memes, projects, events, and introductions — where adventurers meet.',
      es: 'Chat general, memes, proyectos, eventos y presentaciones — donde se encuentran los aventureros.',
    },
    topics: [
      { en: 'General', es: 'General' },
      { en: 'Memes', es: 'Memes' },
      { en: 'Projects', es: 'Proyectos' },
      { en: 'Events', es: 'Eventos' },
      { en: 'Introductions', es: 'Presentaciones' },
    ],
  },
]

export function getPillar(slug: string) {
  return pillars.find((pillar) => pillar.slug === slug)
}
