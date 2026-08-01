import { Link, Navigate, useParams } from 'react-router-dom'
import { ButtonLink } from '../components/common/ButtonLink'
import { PillarIconMark } from '../components/icons/PillarIcons'
import { QuestList } from '../components/quests/QuestList'
import { getPillar } from '../content/pillars'
import { quests } from '../content/quests'
import { site } from '../content/site'
import { useLocale } from '../i18n/useLocale'

export function PillarPage() {
  const { slug = '' } = useParams()
  const { t, tx } = useLocale()
  const pillar = getPillar(slug)

  if (!pillar) return <Navigate to="/pillars" replace />

  const related = quests
    .filter((quest) => quest.pillarSlug === pillar.slug)
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <header className="page-intro">
        <p>
          <Link to="/pillars" className="text-link">
            ← {t.pillars.back}
          </Link>
        </p>
        <PillarIconMark icon={pillar.icon} />
        <h1>{tx(pillar.title)}</h1>
        <p>{tx(pillar.description)}</p>
      </header>

      <section className="section-block">
        <h2>{t.pillars.topics}</h2>
        <div className="chip-list">
          {pillar.topics.map((topic) => (
            <span key={tx(topic)} className="chip">
              {tx(topic)}
            </span>
          ))}
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section-block">
          <h2>{t.home.latestQuests}</h2>
          <QuestList items={related} />
        </section>
      ) : null}

      {pillar.slug === 'guild-hall' || pillar.slug === 'skill-tree' ? (
        <div className="cta-band">
          {pillar.slug === 'guild-hall' ? (
            <ButtonLink
              to={site.discordUrl}
              label={t.home.joinCta}
              variant="primary"
              external
            />
          ) : (
            <ButtonLink to="/projects" label={t.home.viewProjects} variant="primary" />
          )}
        </div>
      ) : null}
    </>
  )
}
