import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getConsent, setConsent } from '../lib/consent'

function CookieNotice() {
  // No SSR here, so reading storage during init is safe and avoids a flash.
  const [visible, setVisible] = useState(() => !getConsent())

  function choose(value) {
    setConsent(value)
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie notice"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 px-4 pt-4"
          style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-border bg-surface/95 p-5 shadow-lg backdrop-blur-md sm:flex-row sm:items-center sm:gap-6 sm:p-6">
            <p className="text-sm leading-relaxed text-muted">
              We use only the cookies needed to make this site work. The
              location map loads Google Maps, which may set its own cookies,
              only after you allow it.{' '}
              <Link
                to="/privacy"
                onClick={() => setVisible(false)}
                className="font-medium text-sage-700 underline underline-offset-2 hover:text-sage-800"
              >
                Learn more
              </Link>
            </p>
            <div className="flex flex-none gap-3">
              <button
                type="button"
                onClick={() => choose('declined')}
                className="flex-1 rounded-full border border-sage-700 px-4 py-2 text-sm font-medium tracking-wide text-sage-700 transition-colors hover:bg-sage-50 sm:flex-none"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => choose('accepted')}
                className="flex-1 rounded-full bg-sage-700 px-4 py-2 text-sm font-medium tracking-wide text-cream shadow-sm transition-colors hover:bg-sage-800 sm:flex-none"
              >
                Allow
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieNotice
