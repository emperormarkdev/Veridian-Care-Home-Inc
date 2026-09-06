import { useEffect, useState } from 'react'

/**
 * Minimal, dependency-free consent store.
 *
 * The site itself sets only essential cookies. The one third-party embed is
 * the Google Maps iframe in the footer, which is withheld until the visitor
 * opts in here. Choice is remembered in localStorage and shared across the
 * app (and across tabs) via a custom event.
 */

const STORAGE_KEY = 'veridian-cookie-consent'
const EVENT_NAME = 'veridian:consent-change'

/** @returns {'accepted' | 'declined' | null} */
export function getConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

/** @param {'accepted' | 'declined'} value */
export function setConsent(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Private mode / storage disabled — the choice just won't persist.
  }
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: value }))
}

/**
 * Subscribe to the current consent value.
 * @returns {['accepted' | 'declined' | null, typeof setConsent]}
 */
export function useConsent() {
  const [consent, setConsentState] = useState(getConsent)

  useEffect(() => {
    const sync = () => setConsentState(getConsent())
    window.addEventListener(EVENT_NAME, sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener(EVENT_NAME, sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  return [consent, setConsent]
}
