import type { ReactNode } from 'react'

type SectionProps = {
  title: string
  subtitle?: string
  children: ReactNode
  id?: string
}

export function Section({ title, subtitle, children, id }: SectionProps) {
  return (
    <section className="section-block" id={id}>
      <div className="section-heading">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {children}
    </section>
  )
}
