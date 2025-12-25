import React from 'react'
import styles from './RSVP.module.css'

type FormState = {
  name: string
  email: string
  attending: 'yes' | 'no' | ''
  comments: string
}

const initialState: FormState = {
  name: '',
  email: '',
  attending: '',
  comments: ''
}

const API_BASE = import.meta.env.VITE_API_URL || ''

export const RSVP: React.FC = () => {
  const [state, setState] = React.useState<FormState>(initialState)
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = React.useState<string>('')

  function validate(s: FormState) {
    const e: Record<string, string> = {}
    if (!s.name.trim()) e.name = 'Name is required'
    if (!s.email.trim()) e.email = 'Email is required'
    else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(s.email)) e.email = 'Invalid email'
    if (!s.attending) e.attending = 'Please select attendance'
    return e
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const v = validate(state)
    setErrors(v)
    if (Object.keys(v).length > 0) return
    setStatus('submitting')
    setMessage('')
    try {
      const res = await fetch(`${API_BASE}/api/rsvp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      setMessage('Thank you! Your RSVP has been received.')
      setState(initialState)
    } catch (err) {
      setStatus('error')
      setMessage('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className={`container ${styles.wrap}`}>
      <header className={styles.header}>
        <h1 id="rsvp-title">Will you attend?</h1>
        <p>Please sign your RSVP</p>
      </header>
      <form className={styles.form} onSubmit={onSubmit} aria-describedby="rsvp-status">
        <div className={styles.row}>
          <label className={styles.label} htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            required
            className={styles.input}
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          {errors.name && <div role="alert" className={styles.error}>{errors.name}</div>}
        </div>
        <div className={styles.row}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={styles.input}
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          {errors.email && <div role="alert" className={styles.error}>{errors.email}</div>}
        </div>
        <div className={styles.row}>
          <span className={styles.label} id="attending-label">Will you attend?</span>
          <div className={styles.radioRow} role="radiogroup" aria-labelledby="attending-label">
            <label>
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={state.attending === 'yes'}
                onChange={(e) => setState({ ...state, attending: e.target.value as 'yes' })}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="attending"
                value="no"
                checked={state.attending === 'no'}
                onChange={(e) => setState({ ...state, attending: e.target.value as 'no' })}
              />
              No
            </label>
          </div>
          {errors.attending && <div role="alert" className={styles.error}>{errors.attending}</div>}
        </div>
        <div className={styles.row}>
          <label className={styles.label} htmlFor="comments">Additional comments</label>
          <textarea
            id="comments"
            name="comments"
            className={styles.textarea}
            rows={4}
            value={state.comments}
            onChange={(e) => setState({ ...state, comments: e.target.value })}
            placeholder="Dietary preferences, plus ones, etc."
          />
        </div>
        <div className={styles.row}>
          <button className={styles.submit} type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'send RSVP'}
          </button>
        </div>
        <div id="rsvp-status" aria-live="polite">
          {message && <p>{message}</p>}
        </div>
      </form>
    </div>
  )
}
