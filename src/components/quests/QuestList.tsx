import { useLocale } from '../../i18n/useLocale'
import type { Quest } from '../../types/content'
import { getPillar } from '../../content/pillars'

export function QuestList({ items }: { items: Quest[] }) {
  const { t, tx } = useLocale()

  if (items.length === 0) {
    return <p className="page-intro">{t.quests.empty}</p>
  }

  return (
    <div className="quest-list">
      {items.map((quest) => {
        const pillar = getPillar(quest.pillarSlug)
        return (
          <article key={quest.id} className="quest-row">
            <div className="quest-meta">
              <span className="quest-status">{t.status[quest.status]}</span>
              {pillar ? <span>{tx(pillar.title)}</span> : null}
              <time dateTime={quest.date}>{quest.date}</time>
            </div>
            <h3>{tx(quest.title)}</h3>
            <p>{tx(quest.detail)}</p>
          </article>
        )
      })}
    </div>
  )
}
