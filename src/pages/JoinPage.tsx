import { ButtonLink } from '../components/common/ButtonLink'
import { eventIdeas, monthlyEvents } from '../content/events'
import { ranks } from '../content/ranks'
import { site } from '../content/site'
import { useLocale } from '../i18n/LocaleContext'

export function JoinPage() {
  const { t, tx } = useLocale()
  const current = monthlyEvents[0]

  return (
    <>
      <header className="page-intro">
        <h1>{t.join.title}</h1>
        <p>{t.join.subtitle}</p>
        <div className="hero-actions">
          <a
            className="external-button"
            href={site.discordUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.join.cta}
          </a>
          <ButtonLink to="/manifesto" label={t.home.readManifesto} />
        </div>
      </header>

      <section className="section-block">
        <h2>{t.join.howTitle}</h2>
        <p style={{ color: 'var(--text-soft)', maxWidth: '52ch' }}>{t.join.howBody}</p>
      </section>

      <section className="section-block">
        <h2>{t.join.ranksTitle}</h2>
        <p style={{ color: 'var(--text-soft)' }}>{t.join.ranksSub}</p>
        <div className="rank-list">
          {ranks.map((rank) => (
            <div key={rank.id} className="rank-item">
              <span aria-hidden>{rank.symbol}</span>
              <strong>{tx(rank.name)}</strong>
            </div>
          ))}
        </div>
      </section>

      {current ? (
        <section className="section-block">
          <h2>{t.join.eventTitle}</h2>
          <p className="kicker">{tx(current.month)}</p>
          <h3>{tx(current.title)}</h3>
          <p style={{ color: 'var(--text-soft)' }}>{tx(current.description)}</p>
          <div className="quest-list" style={{ marginTop: '1.5rem' }}>
            {eventIdeas.map((event) => (
              <article key={event.id} className="quest-row">
                <div className="quest-meta">
                  <span className="quest-status">{tx(event.month)}</span>
                </div>
                <h3>{tx(event.title)}</h3>
                <p>{tx(event.description)}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </>
  )
}
