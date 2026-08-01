import { ButtonLink } from '../components/common/ButtonLink'
import { Section } from '../components/common/Section'
import { PillarGrid } from '../components/pillars/PillarGrid'
import { QuestList } from '../components/quests/QuestList'
import { latestQuests } from '../content/quests'
import { site } from '../content/site'
import { useLocale } from '../i18n/useLocale'

export function HomePage() {
  const { t, tx } = useLocale()

  return (
    <>
      <section className="hero">
        <p className="kicker">{site.brand}</p>
        <h1 className="brand-hero">
          Side <span>Quest</span>
        </h1>
        <p className="hero-tagline">{tx(site.tagline)}</p>
        <p>{tx(site.supportLine)}</p>
        <div className="hero-actions">
          <ButtonLink to="/join" label={t.home.joinCta} variant="primary" />
          <ButtonLink to="/quests" label={t.home.exploreQuests} />
          <ButtonLink to="/manifesto" label={t.home.readManifesto} />
        </div>
      </section>

      <Section title={t.home.chooseQuest} subtitle={t.home.chooseQuestSub} id="choose">
        <PillarGrid />
      </Section>

      <Section title={t.home.latestQuests} subtitle={t.home.latestQuestsSub}>
        <QuestList items={latestQuests(4)} />
        <div className="hero-actions">
          <ButtonLink to="/quests" label={t.home.exploreQuests} />
          <ButtonLink to="/projects" label={t.home.viewProjects} />
        </div>
      </Section>

      <Section title={t.home.community} subtitle={t.home.communitySub}>
        <p style={{ color: 'var(--text-soft)', maxWidth: '48ch', marginTop: 0 }}>
          {t.home.communityBody}
        </p>
        <div className="cta-band">
          <ButtonLink
            to={site.discordUrl}
            label={t.home.joinCta}
            variant="primary"
            external
          />
        </div>
      </Section>
    </>
  )
}
