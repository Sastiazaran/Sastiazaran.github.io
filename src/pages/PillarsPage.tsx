import { PillarGrid } from '../components/pillars/PillarGrid'
import { useLocale } from '../i18n/useLocale'

export function PillarsPage() {
  const { t } = useLocale()

  return (
    <>
      <header className="page-intro">
        <h1>{t.pillars.title}</h1>
        <p>{t.pillars.subtitle}</p>
      </header>
      <PillarGrid />
    </>
  )
}
