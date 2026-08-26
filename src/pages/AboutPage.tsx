import { profile } from '../content/profile'
import { useLocale } from '../i18n/useLocale'

export function AboutPage() {
  const { t, tx } = useLocale()

  return (
    <>
      <header className="page-intro">
        <p className="kicker">{profile.location}</p>
        <h1>{profile.name}</h1>
        <p>{tx(profile.role)}</p>
      </header>

      <div className="prose">
        <p>{tx(profile.bio)}</p>
      </div>

      <section className="section-block">
        <h2>{t.about.skills}</h2>
        <div className="chip-list">
          {profile.skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>{t.about.links}</h2>
        <div className="hero-actions">
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
        </div>
      </section>
    </>
  )
}
