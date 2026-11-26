/** Public file URL that respects Vite's `base` (GitHub Pages or local `/`). */
export function publicAsset(path: string) {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}
