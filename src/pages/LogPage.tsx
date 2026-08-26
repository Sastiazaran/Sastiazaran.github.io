import { LogList } from '../components/quests/LogList'
import { logEntries } from '../content/log'
import { useLocale } from '../i18n/useLocale'

export function LogPage() {
  const { t } = useLocale()
  const items = [...logEntries].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <header className="page-intro">
        <h1>{t.log.title}</h1>
        <p>{t.log.subtitle}</p>
      </header>
      <LogList items={items} />
    </>
  )
}
