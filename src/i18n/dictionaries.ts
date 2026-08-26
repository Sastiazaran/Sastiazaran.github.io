import type { Locale } from '../types/content'

export const dictionaries = {
  en: {
    nav: {
      home: 'Home',
      quests: 'Side quests',
      about: 'About',
    },
    home: {
      kicker: 'Guadalajara · side quests',
      exploreQuests: 'See side quests',
      about: 'About',
      github: 'GitHub',
      questsTitle: 'Side quests',
      questsSub: 'Personal projects I actually want you to open. Honest status — not a shipped-product pitch.',
    },
    quests: {
      title: 'Side quests',
      subtitle:
        'A short list. Class repos and the rest of GitHub stay off this page.',
      filters: {
        all: 'All',
        live: 'Live demo',
        'in-progress': 'In progress',
        paused: 'Paused',
      },
      empty: 'No quests in this filter yet.',
      repo: 'GitHub',
      demo: 'Live demo',
    },
    about: {
      title: 'About',
      skills: 'Stack',
      links: 'Links',
    },
    footer: {
      built: '{name} — personal side quests on GitHub Pages.',
    },
    notFound: {
      title: 'Quest not found',
      body: 'This path leads nowhere. Back to the list.',
      home: 'Back home',
    },
    status: {
      live: 'Live demo',
      'in-progress': 'In progress',
      paused: 'Paused',
    },
    localeToggle: 'ES',
  },
  es: {
    nav: {
      home: 'Inicio',
      quests: 'Side quests',
      about: 'Sobre mí',
    },
    home: {
      kicker: 'Guadalajara · side quests',
      exploreQuests: 'Ver side quests',
      about: 'Sobre mí',
      github: 'GitHub',
      questsTitle: 'Side quests',
      questsSub:
        'Proyectos personales que sí quiero que abras. Estado honesto — no un pitch de producto terminado.',
    },
    quests: {
      title: 'Side quests',
      subtitle:
        'Una lista corta. Los repos de clase y el resto de GitHub se quedan fuera.',
      filters: {
        all: 'Todas',
        live: 'Demo en línea',
        'in-progress': 'En curso',
        paused: 'Pausadas',
      },
      empty: 'Aún no hay quests en este filtro.',
      repo: 'GitHub',
      demo: 'Demo en línea',
    },
    about: {
      title: 'Sobre mí',
      skills: 'Stack',
      links: 'Enlaces',
    },
    footer: {
      built: '{name} — side quests personales en GitHub Pages.',
    },
    notFound: {
      title: 'Quest no encontrada',
      body: 'Este camino no lleva a ningún lado. Vuelve a la lista.',
      home: 'Volver al inicio',
    },
    status: {
      live: 'Demo en línea',
      'in-progress': 'En curso',
      paused: 'Pausada',
    },
    localeToggle: 'EN',
  },
} as const

export type Dictionary = (typeof dictionaries)[Locale]
