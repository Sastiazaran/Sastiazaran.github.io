import type { ReactNode } from 'react'
import type { PillarIcon } from '../../types/content'

type IconProps = { className?: string }

function Svg({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  )
}

export function PillarIconMark({ icon, className = 'pillar-icon' }: { icon: PillarIcon; className?: string }) {
  switch (icon) {
    case 'level-up':
      return (
        <Svg className={className}>
          <path d="M12 20V8" />
          <path d="m7 12 5-5 5 5" />
          <path d="M5 20h14" />
        </Svg>
      )
    case 'skill-tree':
      return (
        <Svg className={className}>
          <circle cx="12" cy="5" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M12 7v4" />
          <path d="m12 11-5 5" />
          <path d="m12 11 5 5" />
        </Svg>
      )
    case 'side-quests':
      return (
        <Svg className={className}>
          <path d="M6 4h9l3 3v13H6z" />
          <path d="M15 4v3h3" />
          <path d="M9 12h6" />
          <path d="M9 16h4" />
        </Svg>
      )
    case 'soundtrack':
      return (
        <Svg className={className}>
          <path d="M9 18V6l10-2v12" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="16" r="2" />
        </Svg>
      )
    case 'exploration':
      return (
        <Svg className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="m16 8-2.5 6.5L7 17l2.5-6.5z" />
        </Svg>
      )
    case 'guild-hall':
      return (
        <Svg className={className}>
          <path d="M12 3 4 8v11h16V8z" />
          <path d="M9 19v-6h6v6" />
          <path d="M12 3v5" />
        </Svg>
      )
  }
}
