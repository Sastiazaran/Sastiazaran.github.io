import type { Locale } from '../types/content'

export const dictionaries = {
  en: {
    nav: {
      home: 'Home',
      quests: 'Quests',
      pillars: 'Pillars',
      projects: 'Projects',
      manifesto: 'Manifesto',
      join: 'Join',
    },
    home: {
      chooseQuest: 'Choose Your Quest',
      chooseQuestSub: 'Pick a pillar and start building your character.',
      latestQuests: 'Latest Quests',
      latestQuestsSub: 'Snapshots from the adventure log.',
      community: 'Guild Hall',
      communitySub: 'A community built around progress, not just chat.',
      communityBody:
        'Share active quests, completed arcs, discoveries, and the soundtrack of your week. Side Quest is where hobbies become XP.',
      joinCta: 'Join the Guild',
      exploreQuests: 'Open quest log',
      viewProjects: 'See projects',
      readManifesto: 'Read the manifesto',
    },
    quests: {
      title: 'Quest Log',
      subtitle: 'Active missions, completed arcs, and discoveries along the way.',
      filters: {
        all: 'All',
        active: 'Active',
        completed: 'Completed',
        discovery: 'Discoveries',
        soundtrack: 'Soundtrack',
        xp: 'XP gained',
      },
      empty: 'No quests in this filter yet.',
    },
    pillars: {
      title: 'Pillars',
      subtitle: 'A few clear paths — not twenty unrelated categories.',
      topics: 'Topics',
      back: 'All pillars',
      open: 'Enter',
    },
    projects: {
      title: 'Skill Tree — Projects',
      subtitle: 'Code quests and experiments that leave a footprint on GitHub.',
      repo: 'Open repository',
    },
    manifesto: {
      title: 'Manifesto',
      founder: 'Guild host',
      skills: 'Skills',
    },
    join: {
      title: 'Join Side Quest',
      subtitle: 'Build your character IRL — with a guild that grows beside you.',
      cta: 'Enter Discord',
      ranksTitle: 'Guild ranks',
      ranksSub: 'Progress is the vibe — not gatekeeping.',
      eventTitle: 'Monthly mission',
      howTitle: 'How to show up',
      howBody:
        'Post your active quest, log completions, share discoveries, drop your weekly soundtrack, and celebrate XP. The guild revolves around member progress.',
    },
    footer: {
      built: 'Built by {name} — Side Quest HQ on GitHub Pages.',
    },
    notFound: {
      title: 'Quest not found',
      body: 'This path leads nowhere. Return to camp.',
      home: 'Back home',
    },
    status: {
      active: 'Active quest',
      completed: 'Completed',
      discovery: 'Discovery',
      soundtrack: 'Soundtrack',
      xp: 'XP gained',
    },
    localeToggle: 'ES',
  },
  es: {
    nav: {
      home: 'Inicio',
      quests: 'Misiones',
      pillars: 'Pilares',
      projects: 'Proyectos',
      manifesto: 'Manifiesto',
      join: 'Unirse',
    },
    home: {
      chooseQuest: 'Elige tu quest',
      chooseQuestSub: 'Escoge un pilar y empieza a construir tu personaje.',
      latestQuests: 'Últimas quests',
      latestQuestsSub: 'Instantáneas del diario de aventuras.',
      community: 'Guild Hall',
      communitySub: 'Una comunidad basada en progreso, no solo en chat.',
      communityBody:
        'Comparte quests activas, arcos completados, descubrimientos y el soundtrack de tu semana. Side Quest es donde los hobbies se convierten en XP.',
      joinCta: 'Unirse al gremio',
      exploreQuests: 'Abrir bitácora',
      viewProjects: 'Ver proyectos',
      readManifesto: 'Leer el manifiesto',
    },
    quests: {
      title: 'Bitácora de quests',
      subtitle: 'Misiones activas, arcos completados y descubrimientos en el camino.',
      filters: {
        all: 'Todas',
        active: 'Activas',
        completed: 'Completadas',
        discovery: 'Descubrimientos',
        soundtrack: 'Soundtrack',
        xp: 'XP ganada',
      },
      empty: 'Aún no hay quests en este filtro.',
    },
    pillars: {
      title: 'Pilares',
      subtitle: 'Pocos caminos claros — no veinte categorías sin relación.',
      topics: 'Temas',
      back: 'Todos los pilares',
      open: 'Entrar',
    },
    projects: {
      title: 'Árbol de habilidades — Proyectos',
      subtitle: 'Quests de código y experimentos que dejan huella en GitHub.',
      repo: 'Abrir repositorio',
    },
    manifesto: {
      title: 'Manifiesto',
      founder: 'Anfitrión del gremio',
      skills: 'Habilidades',
    },
    join: {
      title: 'Únete a Side Quest',
      subtitle: 'Construye tu personaje IRL — con un gremio que crece a tu lado.',
      cta: 'Entrar a Discord',
      ranksTitle: 'Rangos del gremio',
      ranksSub: 'El progreso es la vibra — no el gatekeeping.',
      eventTitle: 'Misión del mes',
      howTitle: 'Cómo aparecer',
      howBody:
        'Publica tu quest activa, registra completados, comparte descubrimientos, suelta el soundtrack de la semana y celebra XP. El gremio gira alrededor del progreso de sus miembros.',
    },
    footer: {
      built: 'Construido por {name} — Side Quest HQ en GitHub Pages.',
    },
    notFound: {
      title: 'Quest no encontrada',
      body: 'Este camino no lleva a ningún lado. Vuelve al campamento.',
      home: 'Volver al inicio',
    },
    status: {
      active: 'Quest activa',
      completed: 'Completada',
      discovery: 'Descubrimiento',
      soundtrack: 'Soundtrack',
      xp: 'XP ganada',
    },
    localeToggle: 'EN',
  },
} as const

export type Dictionary = (typeof dictionaries)[Locale]
