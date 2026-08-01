import type { ProfileContent } from '../types/content'

export const profile: ProfileContent = {
  name: 'Sebastian Astiazaran',
  role: {
    en: 'Guild host · Engineer in computer graphics & systems · Data Science',
    es: 'Anfitrión del gremio · Ingeniero en gráficos y sistemas · Data Science',
  },
  location: 'Guadalajara, Jalisco, Mexico',
  bio: {
    en: 'I build Side Quest as a place where gym, code, anime, music, and real-life experiments belong to the same universe. This site is my footprint — Discord is the campfire.',
    es: 'Construyo Side Quest como un lugar donde gym, código, anime, música y experimentos de la vida real pertenecen al mismo universo. Este sitio es mi huella — Discord es la hoguera.',
  },
  skills: [
    'JavaScript/TypeScript',
    'React',
    'Python',
    'Java',
    'Computer Graphics',
    'Data Science',
  ],
  social: [
    { label: 'GitHub', url: 'https://github.com/Sastiazaran' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sastiazaran/' },
  ],
}
