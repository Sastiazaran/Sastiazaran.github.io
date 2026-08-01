import projects from '../../content/projects.json'
import { useLocale } from '../../i18n/LocaleContext'
import type { ProjectItem } from '../../types/content'

const projectList = projects as ProjectItem[]

export function ProjectGrid() {
  const { t, tx } = useLocale()

  return (
    <div className="grid">
      {projectList.map((project) => (
        <article key={project.slug} className="card">
          <h3 style={{ margin: 0 }}>{project.title}</h3>
          <p style={{ margin: 0, color: 'var(--text-soft)' }}>
            {tx(project.description)}
          </p>
          <div className="chip-list">
            {project.tech.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
          <a
            className="text-link"
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.projects.repo}
          </a>
        </article>
      ))}
    </div>
  )
}
