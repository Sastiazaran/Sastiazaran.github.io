import { useLocale } from '../../i18n/useLocale'
import type { LogEntry } from '../../types/content'

export function LogList({ items }: { items: LogEntry[] }) {
  const { t, tx } = useLocale()

  if (items.length === 0) {
    return <p className="page-intro">{t.log.empty}</p>
  }

  return (
    <div className="quest-list">
      {items.map((entry) => (
        <article key={entry.id} className="quest-row">
          <div className="quest-meta">
            <span className="quest-status">{t.logStatus[entry.status]}</span>
            <time dateTime={entry.date}>{entry.date}</time>
          </div>
          <h3>{tx(entry.title)}</h3>
          <p>{tx(entry.detail)}</p>
        </article>
      ))}
    </div>
  )
}
