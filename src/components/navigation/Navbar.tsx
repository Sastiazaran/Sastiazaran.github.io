import { NavLink } from 'react-router-dom'
import { useLocale } from '../../i18n/LocaleContext'
import { site } from '../../content/site'
import { navLinkKeys } from './navLinks'

export function Navbar() {
  const { t, toggleLocale } = useLocale()

  return (
    <nav className="navbar" aria-label="Primary">
      <NavLink to="/" className="brand">
        Side <span>Quest</span>
      </NavLink>
      <ul className="nav-list">
        {navLinkKeys.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
              end={link.to === '/'}
            >
              {t.nav[link.key]}
            </NavLink>
          </li>
        ))}
        <li>
          <button
            type="button"
            className="locale-toggle"
            onClick={toggleLocale}
            aria-label={`Switch language — ${site.brand}`}
          >
            {t.localeToggle}
          </button>
        </li>
      </ul>
    </nav>
  )
}
