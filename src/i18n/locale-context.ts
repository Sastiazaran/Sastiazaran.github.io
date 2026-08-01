import { createContext } from 'react'
import type { Locale, LocalizedString } from '../types/content'
import type { Dictionary } from './dictionaries'

export type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: Dictionary
  tx: (value: LocalizedString) => string
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
