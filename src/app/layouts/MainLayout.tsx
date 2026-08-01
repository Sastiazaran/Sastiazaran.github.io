import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/navigation/Navbar'
import { useLocale } from '../../i18n/useLocale'
import { profile } from '../../content/profile'
import { site } from '../../content/site'

export function MainLayout() {
  const { t } = useLocale()

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
            <a className="text-link" href={site.discordUrl} target="_blank" rel="noreferrer">
              Discord
            </a>
            {' · '}
            <a
              className="text-link"
              href="https://github.com/Sastiazaran"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
