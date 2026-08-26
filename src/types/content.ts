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

export type QuestStatus = 'live' | 'local' | 'building'

export type Quest = {
  id: string
  status: QuestStatus
  title: LocalizedString
  summary: LocalizedString
  tech: string[]
  repositoryUrl: string
  demoUrl?: string
  featured?: boolean
}

export type LogStatus = 'active' | 'completed' | 'discovery' | 'soundtrack'

export type LogEntry = {
  id: string
  status: LogStatus
  title: LocalizedString
  detail: LocalizedString
  date: string
}

export type SiteConfig = {
  brand: string
  tagline: LocalizedString
  supportLine: LocalizedString
  discordUrl: string
  seo: {
    title: LocalizedString
    description: LocalizedString
  }
}
