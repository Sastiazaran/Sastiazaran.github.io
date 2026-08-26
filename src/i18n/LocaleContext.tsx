import { useEffect, useState, type ReactNode } from 'react'
import type { Locale, LocalizedString } from '../types/content'
import { dictionaries } from './dictionaries'
import { LocaleContext } from './locale-context'

const STORAGE_KEY = 'side-quest-locale'

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'es'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'es') return stored
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (next: Locale) => setLocaleState(next)
  const toggleLocale = () => setLocaleState((prev) => (prev === 'en' ? 'es' : 'en'))
  const tx = (value: LocalizedString) => value[locale]

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        t: dictionaries[locale],
        tx,
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}
