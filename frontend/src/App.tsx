import React from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Countdown } from './components/Countdown'
import { GroomBride } from './components/GroomBride'
import { WhenWhere } from './components/WhenWhere'
import { RSVP } from './components/RSVP'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero" className="section" aria-label="Hero">
          <HeroSlider />
        </section>
        <section id="countdown" className="section" aria-labelledby="countdown-title">
          <div className="container">
            <h1 id="countdown-title">Countdown</h1>
          </div>
          <Countdown targetDateString="2026-08-08T12:00:00-07:00" />
        </section>
        <section id="couple" className="section" aria-labelledby="couple-title">
          <div className="container">
            <h1 id="couple-title">Groom & Bride</h1>
          </div>
          <GroomBride />
        </section>
        <section id="whenwhere" className="section" aria-labelledby="whenwhere-title">
          <div className="container">
            <h1 id="whenwhere-title">When and Where</h1>
          </div>
          <WhenWhere />
        </section>
        <section id="rsvp" className="section" aria-labelledby="rsvp-title">
          <RSVP />
        </section>
      </main>
    </>
  )
}
