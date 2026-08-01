import { Link } from 'react-router-dom'
import { pillars } from '../../content/pillars'
import { useLocale } from '../../i18n/LocaleContext'
import { PillarIconMark } from '../icons/PillarIcons'

export function PillarGrid() {
  const { tx } = useLocale()

  return (
    <div className="pillar-grid">
      {pillars.map((pillar) => (
        <Link
          key={pillar.slug}
          to={`/pillars/${pillar.slug}`}
          className="pillar-tile"
        >
          <PillarIconMark icon={pillar.icon} />
          <h3>{tx(pillar.title)}</h3>
          <p>{tx(pillar.short)}</p>
        </Link>
      ))}
    </div>
  )
}
