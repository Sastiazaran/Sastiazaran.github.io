import { ButtonLink } from '../components/common/ButtonLink'
import { Section } from '../components/common/Section'
import { LogList } from '../components/quests/LogList'
import { QuestList } from '../components/quests/QuestList'
import { latestLog } from '../content/log'
import { profile } from '../content/profile'
import { featuredQuests } from '../content/quests'
import { site } from '../content/site'
import { useLocale } from '../i18n/useLocale'

export function HomePage() {
  const { t, tx } = useLocale()
  const github = profile.social.find((link) => link.label === 'GitHub')

  return (
    <>
      <section className="hero">
        <p className="kicker">{t.home.kicker}</p>
        <h1 className="brand-hero">
          Sebastián <span>Astiazarán</span>
        </h1>
        <p className="hero-tagline">{tx(site.tagline)}</p>
        <p>{tx(site.supportLine)}</p>
        <div className="hero-actions">
          <ButtonLink to="/quests" label={t.home.exploreQuests} variant="primary" />
          <ButtonLink to="/about" label={t.home.about} />
          {github ? (
            <ButtonLink to={github.url} label={t.home.github} external />
          ) : null}
        </div>
      </section>

      <Section title={t.home.questsTitle} subtitle={t.home.questsSub} id="quests">
        <QuestList items={featuredQuests} />
        <div className="hero-actions">
          <ButtonLink to="/quests" label={t.home.allQuests} />
        </div>
      </Section>

      <Section title={t.home.logTitle} subtitle={t.home.logSub} id="log">
        <LogList items={latestLog(3)} />
        <div className="hero-actions">
          <ButtonLink to="/log" label={t.home.openLog} />
        </div>
      </Section>
    </>
  )
}
