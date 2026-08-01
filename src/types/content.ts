export type Locale = 'en' | 'es'

export type LocalizedString = {
  en: string
  es: string
}

export type SocialLink = {
  label: string
  url: string
}

export type ProfileContent = {
  name: string
  role: LocalizedString
  location: string
  bio: LocalizedString
  skills: string[]
  social: SocialLink[]
}

export type ProjectItem = {
  slug: string
  title: string
  description: LocalizedString
  tech: string[]
  repositoryUrl: string
}

export type PillarIcon =
  | 'level-up'
  | 'skill-tree'
  | 'side-quests'
  | 'soundtrack'
  | 'exploration'
  | 'guild-hall'

export type Pillar = {
  slug: string
  icon: PillarIcon
  title: LocalizedString
  short: LocalizedString
  description: LocalizedString
  topics: LocalizedString[]
}

export type QuestStatus = 'active' | 'completed' | 'discovery' | 'soundtrack' | 'xp'

export type Quest = {
  id: string
  status: QuestStatus
  title: LocalizedString
  detail: LocalizedString
  pillarSlug: string
  date: string
}

export type Rank = {
  id: string
  name: LocalizedString
  symbol: string
}

export type MonthlyEvent = {
  id: string
  title: LocalizedString
  description: LocalizedString
  month: LocalizedString
}

export type SiteConfig = {
  brand: string
  tagline: LocalizedString
  supportLine: LocalizedString
  discordUrl: string
  discordInviteCode: string
  seo: {
    title: string
    description: LocalizedString
  }
}
