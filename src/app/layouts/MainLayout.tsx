import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/navigation/Navbar'
import { useLocale } from '../../i18n/useLocale'
import { profile } from '../../content/profile'
import { site } from '../../content/site'

export function MainLayout() {
  const { t, tx, locale } = useLocale()

  useEffect(() => {
    document.title = tx(site.seo.title)
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', tx(site.seo.description))
  }, [locale, tx])

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container">
          <Navbar />
        </div>
      </header>
      <main className="site-main container">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>{t.footer.built.replace('{name}', profile.name)}</p>
          <p>
            {profile.social.map((link, index) => (
              <span key={link.url}>
                {index > 0 ? ' · ' : null}
                <a className="text-link" href={link.url} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </span>
            ))}
            {' · '}
            <a className="text-link" href={site.discordUrl} target="_blank" rel="noreferrer">
              Discord
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
