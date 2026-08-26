import { useMemo, useState } from 'react'
import { QuestList } from '../components/quests/QuestList'
import { quests } from '../content/quests'
import { useLocale } from '../i18n/useLocale'
import type { QuestStatus } from '../types/content'

type Filter = 'all' | QuestStatus

const FILTERS: Filter[] = ['all', 'live', 'local']

export function QuestsPage() {
  const { t } = useLocale()
  const [filter, setFilter] = useState<Filter>('all')

  const items = useMemo(() => {
    if (filter === 'all') return quests
    return quests.filter((quest) => quest.status === filter)
  }, [filter])

  return (
    <>
      <header className="page-intro">
        <h1>{t.quests.title}</h1>
        <p>{t.quests.subtitle}</p>
      </header>

      <div className="filter-row" role="tablist" aria-label={t.quests.title}>
        {FILTERS.map((key) => (
          <button
            key={key}
            type="button"
            className={`filter-chip${filter === key ? ' filter-chip-active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {t.quests.filters[key]}
          </button>
        ))}
      </div>

      <QuestList items={items} />
    </>
  )
}
