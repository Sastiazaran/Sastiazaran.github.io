import type { Locale } from '../types/content'

export const dictionaries = {
  en: {
    nav: {
      home: 'Home',
      quests: 'Side quests',
      log: 'Log',
      about: 'About',
    },
    home: {
      kicker: 'Guadalajara · side quests',
      exploreQuests: 'See side quests',
      about: 'About',
      github: 'GitHub',
      questsTitle: 'Side quests',
      questsSub: 'Software I actually want you to open. Honest status — not a shipped-product pitch.',
      allQuests: 'All software quests',
      logTitle: 'IRL log',
      logSub: 'A few of my own side quests outside the repo list.',
      openLog: 'Open full log',
    },
    quests: {
      title: 'Side quests',
      subtitle:
        'Personal products. Class repos stay off this page.',
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
    log: {
      title: 'IRL log',
      subtitle: 'Gym, food, shows, music — my side quests, not a guild feed.',
      empty: 'No log entries yet.',
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
    logStatus: {
      active: 'Active',
      completed: 'Done',
      discovery: 'Discovery',
      soundtrack: 'Soundtrack',
    },
    localeToggle: 'ES',
  },
  es: {
    nav: {
      home: 'Inicio',
      quests: 'Side quests',
      log: 'Bitácora',
      about: 'Sobre mí',
    },
    home: {
      kicker: 'Guadalajara · side quests',
      exploreQuests: 'Ver side quests',
      about: 'Sobre mí',
      github: 'GitHub',
      questsTitle: 'Side quests',
      questsSub:
        'Software que sí quiero que abras. Estado honesto — no un pitch de producto terminado.',
      allQuests: 'Todas las quests de software',
      logTitle: 'Bitácora IRL',
      logSub: 'Algunas side quests mías fuera de la lista de repos.',
      openLog: 'Abrir bitácora',
    },
    quests: {
      title: 'Side quests',
      subtitle:
        'Productos personales. Los repos de clase se quedan fuera.',
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
    log: {
      title: 'Bitácora IRL',
      subtitle: 'Gym, comida, series, música — mis side quests, no un feed de gremio.',
      empty: 'Aún no hay entradas.',
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
    logStatus: {
      active: 'Activa',
      completed: 'Hecha',
      discovery: 'Descubrimiento',
      soundtrack: 'Soundtrack',
    },
    localeToggle: 'EN',
  },
} as const

export type Dictionary = (typeof dictionaries)[Locale]
