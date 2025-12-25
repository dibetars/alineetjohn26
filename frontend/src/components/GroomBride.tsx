import React from 'react'
import styles from './GroomBride.module.css'

export const GroomBride: React.FC = () => {
  return (
    <div className={styles.grid} role="list" aria-label="Groom and Bride">
      <article className={styles.card} role="listitem" aria-labelledby="groom-title">
        <div className={styles.avatarWrap}>
          <img
            className={styles.avatar}
            src="/assets/groom.svg"
            alt="Portrait of Balema John Laba"
            loading="lazy"
            width={180}
            height={180}
          />
        </div>
        <h2 id="groom-title" className={styles.title}>The Groom</h2>
        <div className={styles.name}>Balema John Laba</div>
        <p className={styles.bio}>
          John is a man whose life is defined by his deep commitment to faith, family, and community. As a pastor, he has touched countless lives with his powerful oratory and genuine care for others. Whether he's delivering a moving sermon or simply sharing wisdom over coffee, Balema has a gift for inspiring those around him. A natural leader, he brings people together with warmth and conviction. Above all, he's a devoted family man who leads with love and purpose—qualities that make him not only a pillar of his community but the rock of his home.
        </p>
      </article>
      <article className={styles.card} role="listitem" aria-labelledby="bride-title">
        <div className={styles.avatarWrap}>
          <img
            className={styles.avatar}
            src="/assets/bride.svg"
            alt="Portrait of Aline"
            loading="lazy"
            width={180}
            height={180}
          />
        </div>
        <h2 id="bride-title" className={styles.title}>The Bride</h2>
        <div className={styles.name}>Aline</div>
        <p className={styles.bio}>
          Aline is the kind of person who lights up a room the moment she walks in. Her smile—radiant and unforgettable—has a way of making everyone feel seen and valued. Family sits at the very center of her world, and she nurtures those relationships with remarkable understanding and grace. Whether navigating life's challenges or celebrating its joys, Aline approaches every moment with empathy and an open heart. Her ability to listen, to comfort, and to love unconditionally makes her not just a cherished partner, but a treasured presence in the lives of everyone fortunate enough to know her.
        </p>
      </article>
    </div>
  )
}
