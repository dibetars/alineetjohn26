import React from 'react'
import styles from './Navbar.module.css'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.inner}>
        <a
          className={styles.logo}
          href="#hero"
          aria-label="Go to Hero"
          onClick={(e) => {
            e.preventDefault()
            scrollToId('hero')
          }}
        >
          <img src="/assets/logo.svg" alt="" width={32} height={32} aria-hidden="true" />
          Aline & John
        </a>
        <ul className={styles.menu} role="menubar" aria-label="Main menu">
          {[
            { id: 'countdown', label: 'Countdown' },
            { id: 'couple', label: 'Groom & Bride' },
            { id: 'whenwhere', label: 'When & Where' },
            { id: 'rsvp', label: 'RSVP' }
          ].map((item) => (
            <li role="none" key={item.id}>
              <a
                className={styles.link}
                role="menuitem"
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId(item.id)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={styles.hamburger}
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className={styles.drawer} role="dialog" aria-label="Mobile menu">
          <ul>
            {[
              { id: 'countdown', label: 'Countdown' },
              { id: 'couple', label: 'Groom & Bride' },
              { id: 'whenwhere', label: 'When & Where' },
              { id: 'rsvp', label: 'RSVP' }
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToId(item.id)
                    setOpen(false)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
