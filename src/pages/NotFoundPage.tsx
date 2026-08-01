import { ButtonLink } from '../components/common/ButtonLink'
import { useLocale } from '../i18n/LocaleContext'

export function NotFoundPage() {
  const { t } = useLocale()

  return (
    <header className="page-intro">
      <h1>{t.notFound.title}</h1>
      <p>{t.notFound.body}</p>
      <div className="hero-actions">
        <ButtonLink to="/" label={t.notFound.home} variant="primary" />
      </div>
    </header>
  )
}
