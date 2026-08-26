import type { ProfileContent } from '../types/content'

export const profile: ProfileContent = {
  name: 'Sebastián Astiazarán',
  role: {
    en: 'Engineer in computer graphics and systems · Data Science',
    es: 'Ingeniero en gráficos por computadora y sistemas · Data Science',
  },
  location: 'Guadalajara, Jalisco, Mexico',
  bio: {
    en: 'I build software around graphics, systems, and data — and I keep a small set of personal side quests on the side: learning tools, local-first apps, music, and experiments I actually use. GitHub is where the code lives; this page is the short list I want you to look at.',
    es: 'Construyo software alrededor de gráficos, sistemas y datos — y mantengo un puñado de side quests personales: herramientas para aprender, apps local-first, música y experimentos que sí uso. GitHub es donde vive el código; esta página es la lista corta que quiero que mires.',
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
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sastiazaran/' },
  ],
}
