import type { ProfileContent } from '../types/content'

export const profile: ProfileContent = {
  name: 'Sebastián Astiazarán',
  role: {
    en: 'Engineer in computer graphics and systems · Data Science',
    es: 'Ingeniero en gráficos por computadora y sistemas · Data Science',
  },
  location: 'Guadalajara, Jalisco, Mexico',
  bio: {
    en: 'I build software around graphics, systems, and data. Side quests — misiones secundarias — is how I talk about everything I make, including an offline iPhone tracker that is a separate app from this site. GitHub is the code; this page is the short list I want you to look at.',
    es: 'Construyo software alrededor de gráficos, sistemas y datos. Side quests — misiones secundarias — es cómo hablo de todo lo que hago, incluido un tracker offline para iPhone que es otra app, no este sitio. GitHub es el código; esta página es la lista corta que quiero que mires.',
  },
  skills: [
    'TypeScript',
    'React',
    'Python',
    'Java',
    'Computer Graphics',
    'Data Science',
  ],
  social: [
    { label: 'GitHub', url: 'https://github.com/Sastiazaran' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/sastiazaran' },
  ],
}
