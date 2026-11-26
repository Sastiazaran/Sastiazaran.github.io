import { useEffect, useRef, useState } from 'react'
import type { QuestMedia as QuestMediaContent } from '../../types/content'

export function QuestMedia({
  media,
  label,
}: {
  media: QuestMediaContent
  label: string
}) {
  const boxRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [play, setPlay] = useState(false)
  const [ready, setReady] = useState(false)
  const [poster, setPoster] = useState(media.poster)

  useEffect(() => {
    const query = window.matchMedia('(max-width: 720px)')
    const apply = () => {
      setPoster(query.matches && media.mobilePoster ? media.mobilePoster : media.poster)
    }
    apply()
    query.addEventListener('change', apply)
    return () => query.removeEventListener('change', apply)
  }, [media.mobilePoster, media.poster])

  useEffect(() => {
    const box = boxRef.current
    if (!box || !media.video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting)
        if (visible) setPlay(true)
        const video = videoRef.current
        if (!video) return
        if (visible) void video.play().catch(() => undefined)
        else video.pause()
      },
      { rootMargin: '160px' },
    )
    observer.observe(box)
    return () => observer.disconnect()
  }, [media.video, play])

  return (
    <div className="quest-media" ref={boxRef}>
      <picture>
        {media.mobilePoster ? (
          <source media="(max-width: 720px)" srcSet={media.mobilePoster} />
        ) : null}
        <img src={poster} alt="" width={960} height={540} loading="lazy" decoding="async" />
      </picture>
      {media.video && play ? (
        <video
          ref={videoRef}
          className={ready ? 'is-ready' : undefined}
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          aria-label={label}
          onLoadedData={() => setReady(true)}
        >
          <source src={media.video} type="video/mp4" />
        </video>
      ) : null}
    </div>
  )
}
