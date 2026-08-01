import { Link } from 'react-router-dom'

type ButtonLinkProps = {
  to: string
  label: string
  variant?: 'default' | 'primary'
  external?: boolean
}

export function ButtonLink({
  to,
  label,
  variant = 'default',
  external = false,
}: ButtonLinkProps) {
  const className = `button-link${variant === 'primary' ? ' button-link-primary' : ''}`

  if (external) {
    return (
      <a href={to} className={className} target="_blank" rel="noreferrer">
        {label}
      </a>
    )
  }

  return (
    <Link to={to} className={className}>
      {label}
    </Link>
  )
}
