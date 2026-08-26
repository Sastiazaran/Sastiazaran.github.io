import { useLocale } from '../../i18n/useLocale'
import type { Quest } from '../../types/content'

export function QuestList({ items }: { items: Quest[] }) {
  const { t, tx } = useLocale()

  if (items.length === 0) {
    return <p className="page-intro">{t.quests.empty}</p>
  }

  return (
    <div className="quest-list">
      {items.map((quest) => (
        <article key={quest.id} className="quest-row">
          <div className="quest-meta">
            <span className="quest-status">{t.status[quest.status]}</span>
          </div>
          <h3>{tx(quest.title)}</h3>
          <p>{tx(quest.summary)}</p>
          <div className="chip-list">
            {quest.tech.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
          <div className="quest-links">
            <a
              className="text-link"
              href={quest.repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t.quests.repo}
            </a>
            {quest.demoUrl ? (
              <a
                className="text-link"
                href={quest.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.quests.demo}
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  )
}
