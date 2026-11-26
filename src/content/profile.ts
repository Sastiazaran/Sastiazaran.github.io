import type { ProfileContent } from '../types/content'
import { publicAsset } from './assets'

export const profile: ProfileContent = {
  name: 'Sebastián Astiazarán',
  role: {
    en: 'Data Scientist & Data Engineer | Software Developer · QA Automation',
    es: 'Científico de datos y Data Engineer | Desarrollador de software · QA Automation',
  },
  portrait: publicAsset('portrait.webp'),
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
    'Data Engineering',
    'QA Automation',
  ],
  social: [
    { label: 'GitHub', url: 'https://github.com/Sastiazaran' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/sastiazaran' },
  ],
}
