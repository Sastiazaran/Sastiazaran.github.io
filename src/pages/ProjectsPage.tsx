import { ProjectGrid } from '../features/projects/ProjectGrid'
import { useLocale } from '../i18n/useLocale'

export function ProjectsPage() {
  const { t } = useLocale()

  return (
    <>
      <header className="page-intro">
        <h1>{t.projects.title}</h1>
        <p>{t.projects.subtitle}</p>
      </header>
      <ProjectGrid />
    </>
  )
}
