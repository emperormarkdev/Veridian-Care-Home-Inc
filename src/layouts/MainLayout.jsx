import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import { MailIcon, PhoneIcon, PinIcon } from '../components/icons'
import { ctaBackground } from '../data/photos'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/mission', label: 'Mission' },
  { to: '/vision', label: 'Vision' },
]

function MainLayout() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 8)
  })

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={`sticky top-0 z-30 border-b backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? 'border-border bg-cream/90 shadow-sm'
            : 'border-transparent bg-cream/60'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <Logo />
          </NavLink>

          <ul className="hidden gap-8 sm:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative block py-1 text-sm tracking-wide transition-colors ${
                      isActive
                        ? 'font-medium text-sage-700'
                        : 'text-muted hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="active-nav-underline"
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-sage-700"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="relative z-30 flex h-9 w-9 flex-col items-center justify-center gap-[5px] sm:hidden"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="h-[1.5px] w-6 bg-ink"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-[1.5px] w-6 bg-ink"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="h-[1.5px] w-6 bg-ink"
            />
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-border bg-cream sm:hidden"
            >
              <ul className="flex flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-3 text-base transition-colors ${
                          isActive
                            ? 'bg-sage-50 font-medium text-sage-700'
                            : 'text-muted hover:bg-sage-50/60 hover:text-ink'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="relative overflow-hidden border-t border-border bg-sage-900 text-cream/80">
        <div className="relative isolate overflow-hidden border-b border-cream/10">
          <img
            src={ctaBackground}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            style={{ filter: 'grayscale(1)' }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-sage-900 via-sage-900/95 to-sage-900/75"
          />
          <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center sm:px-8 sm:py-20">
            <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
              Come see Veridian for yourself.
            </h2>
            <p className="max-w-md text-cream/70">
              Schedule a visit, ask a question, or just say hello. We would
              love to meet your family and show you around the home.
            </p>
            <motion.a
              href="tel:+18258673549"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-full bg-clay-500 px-6 py-3 text-sm font-medium tracking-wide text-cream shadow-sm hover:bg-clay-600 hover:shadow-md"
            >
              <PhoneIcon className="h-4 w-4" />
              Call +1 (825) 867-3549
            </motion.a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-sage-700/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[360px] w-[360px] rounded-full bg-clay-700/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8">
          <div className="grid gap-12 sm:grid-cols-[1.1fr_1fr_1fr]">
            <div>
              <Logo className="[&_span]:text-cream" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
                A home where your family becomes part of ours, cared for
                with patience and dignity every day.
              </p>
              <ul className="mt-6 flex gap-6 text-sm">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className="text-cream/70 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-medium tracking-[0.2em] text-cream/50 uppercase">
                Contact
              </span>
              <ul className="mt-4 space-y-3 text-sm text-cream/75">
                <li>
                  <a
                    href="tel:+18258673549"
                    className="flex items-center gap-2.5 transition-colors hover:text-cream"
                  >
                    <PhoneIcon className="h-4 w-4 flex-none text-cream/50" />
                    +1 (825) 867-3549
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:veridiancarehome@gmail.com"
                    className="flex items-center gap-2.5 transition-colors hover:text-cream"
                  >
                    <MailIcon className="h-4 w-4 flex-none text-cream/50" />
                    veridiancarehome@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <PinIcon className="mt-0.5 h-4 w-4 flex-none text-cream/50" />
                  <address className="leading-relaxed not-italic">
                    10925 97 St NW
                    <br />
                    Edmonton, AB T5H 2M7
                  </address>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-medium tracking-[0.2em] text-cream/50 uppercase">
                Find Us
              </span>
              <div className="mt-4 overflow-hidden rounded-2xl border border-cream/10 shadow-lg">
                <iframe
                  title="Map to Veridian Care Home"
                  src="https://www.google.com/maps?q=10925+97+St+NW,+Edmonton,+AB+T5H+2M7,+Canada&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-40 w-full grayscale-[40%] contrast-[1.1] sm:h-full"
                />
              </div>
            </div>
          </div>

          <p className="mt-12 border-t border-cream/10 pt-6 text-xs text-cream/50">
            © {new Date().getFullYear()} Veridian Care Home. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
