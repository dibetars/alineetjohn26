import React from 'react'
import styles from './WhenWhere.module.css'

export const WhenWhere: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.row} role="list" aria-label="Ceremony and reception">
        <article className={styles.card} role="listitem" aria-labelledby="ceremony-title">
          <img
            className={styles.image}
            src="/assets/venue.svg"
            alt="Wedding ceremony venue placeholder"
            loading="lazy"
          />
          <div className={styles.content}>
            <h2 id="ceremony-title" className={styles.title}>Wedding Ceremony</h2>
            <p>Join us for the ceremony in a beautiful seaside venue in Ventura.</p>
          </div>
        </article>
        <article className={styles.card} role="listitem" aria-labelledby="reception-title">
          <img
            className={styles.image}
            src="/assets/reception.svg"
            alt="Wedding party reception placeholder"
            loading="lazy"
          />
          <div className={styles.content}>
            <h2 id="reception-title" className={styles.title}>Wedding Party</h2>
            <p>Celebrate with us at the reception — food, music, and dancing!</p>
          </div>
        </article>
      </div>
      <div className={styles.mapWrap} aria-label="Map to wedding location">
        <iframe
          className={styles.map}
          title="Google Map"
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
          src="https://www.google.com/maps?q=Ventura,%20California,%20USA&z=12&output=embed"
        />
        <div className={styles.marker} aria-hidden="true"></div>
      </div>
    </div>
  )
}
