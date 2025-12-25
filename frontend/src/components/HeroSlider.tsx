import React from 'react'
import styles from './HeroSlider.module.css'

const images = [
  { src: '/assets/hero1.jpg', fallback: '/assets/hero1.svg', alt: 'Couple photo 1' },
  { src: '/assets/hero2.jpg', fallback: '/assets/hero2.svg', alt: 'Couple photo 2' },
  { src: '/assets/hero3.jpg', fallback: '/assets/hero3.svg', alt: 'Couple photo 3' },
  { src: '/assets/hero4.jpg', fallback: '/assets/hero4.svg', alt: 'Couple photo 4' }
]

export const HeroSlider: React.FC = () => {
  const [index, setIndex] = React.useState(0)
  const timeoutRef = React.useRef<number | null>(null)

  const next = React.useCallback(() => {
    setIndex((i) => (i + 1) % images.length)
  }, [])
  const prev = React.useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }, [])

  React.useEffect(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(next, 5000)
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [index, next])

  return (
    <div className={styles.root}>
      <div className={styles.slides} aria-live="polite">
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`${styles.slide} ${i === index ? styles.slideActive : ''}`}
            role="group"
            aria-label={`Slide ${i + 1} of ${images.length}`}
          >
            <img
              className={styles.img}
              src={img.src}
              alt={img.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                if (img.fallback && target.src !== window.location.origin + img.fallback) {
                  target.src = img.fallback
                }
              }}
            />
          </div>
        ))}
      </div>
      <div className={styles.overlay}>
        <div>
          <h1 className={styles.headline}>Aline et John</h1>
          <p className={styles.sub}>Getting Married on August 8th, 2026 — Ventura, California, USA</p>
        </div>
      </div>
      <div className={styles.arrows} aria-hidden="true">
        <button className={styles.arrowBtn} onClick={prev} aria-label="Previous slide">
          ‹
        </button>
        <button className={styles.arrowBtn} onClick={next} aria-label="Next slide">
          ›
        </button>
      </div>
      <div className={styles.controls} role="tablist" aria-label="Slide controls">
        {images.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            aria-controls={`slide-${i}`}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
