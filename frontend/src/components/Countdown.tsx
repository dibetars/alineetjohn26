import React from 'react'
import styles from './Countdown.module.css'

type Props = {
  targetDateString: string
}

function getRemaining(target: Date) {
  const now = new Date()
  const diff = target.getTime() - now.getTime()
  const totalMinutes = Math.max(0, Math.floor(diff / (1000 * 60)))
  const days = Math.floor(totalMinutes / (60 * 24))
  const hours = Math.floor((totalMinutes - days * 24 * 60) / 60)
  const minutes = totalMinutes - days * 24 * 60 - hours * 60
  return { days, hours, minutes }
}

export const Countdown: React.FC<Props> = ({ targetDateString }) => {
  const target = React.useMemo(() => new Date(targetDateString), [targetDateString])
  const [remaining, setRemaining] = React.useState(getRemaining(target))
  React.useEffect(() => {
    const id = window.setInterval(() => setRemaining(getRemaining(target)), 1000)
    return () => window.clearInterval(id)
  }, [target])
  return (
    <div className={`container ${styles.wrap}`}>
      <p className={styles.date} aria-live="polite">
        August 8th, 2026 — Ventura, California, USA
      </p>
      <div className={styles.grid}>
        <div className={styles.card} aria-label="Days remaining">
          <div className={styles.num}>{remaining.days}</div>
          <div className={styles.label}>Days</div>
        </div>
        <div className={styles.card} aria-label="Hours remaining">
          <div className={styles.num}>{remaining.hours}</div>
          <div className={styles.label}>Hours</div>
        </div>
        <div className={styles.card} aria-label="Minutes remaining">
          <div className={styles.num}>{remaining.minutes}</div>
          <div className={styles.label}>Minutes</div>
        </div>
      </div>
    </div>
  )
}
