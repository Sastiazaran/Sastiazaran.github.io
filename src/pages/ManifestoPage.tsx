import { ButtonLink } from '../components/common/ButtonLink'
import {
  manifestoClosing,
  manifestoLines,
  manifestoPhilosophy,
} from '../content/manifesto'
import { profile } from '../content/profile'
import { site } from '../content/site'
import { useLocale } from '../i18n/LocaleContext'

export function ManifestoPage() {
  const { t, tx } = useLocale()

  return (
    <>
      <header className="page-intro">
        <p className="kicker">{site.brand}</p>
        <h1>{t.manifesto.title}</h1>
        <p>{tx(manifestoPhilosophy)}</p>
      </header>

      <div className="prose">
        {manifestoLines.map((line) => (
          <p key={line.en}>{tx(line)}</p>
        ))}
        <p className="closing">{tx(manifestoClosing)}</p>
      </div>

      <section className="section-block">
        <h2>{t.manifesto.founder}</h2>
        <p style={{ color: 'var(--text-soft)', marginTop: 0 }}>
          <strong style={{ color: 'var(--text)' }}>{profile.name}</strong>
          <br />
          {tx(profile.role)}
          <br />
          {profile.location}
        </p>
        <p style={{ color: 'var(--text-soft)' }}>{tx(profile.bio)}</p>
        <h3>{t.manifesto.skills}</h3>
        <div className="chip-list">
          {profile.skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
        <div className="hero-actions" style={{ marginTop: '1.25rem' }}>
          {profile.social.map((link) => (
            <a
              key={link.url}
              className="button-link"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink to="/join" label={t.home.joinCta} variant="primary" />
        </div>
      </section>
    </>
  )
}
