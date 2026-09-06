import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow'
import Logo from '../components/Logo'
import { ChevronDownIcon, MailIcon, PhoneIcon, PinIcon } from '../components/icons'
import { ctaBackground } from '../data/photos'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/mission', label: 'Mission' },
  { to: '/vision', label: 'Vision' },
]

function MainLayout() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const lastY = useRef(0)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 8)
    const delta = latest - lastY.current
    if (latest > 160 && delta > 4) {
      setHidden(true)
    } else if (delta < -4 || latest < 160) {
      setHidden(false)
    }
    lastY.current = latest
  })

  return (
    <div className="flex min-h-screen flex-col">
      <motion.header
        animate={{ y: hidden && !menuOpen ? '-150%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-30 transition-[padding] duration-300 ${
          scrolled ? 'pt-3 sm:pt-4' : 'pt-0'
        }`}
      >
        <nav
          className={`mx-auto flex items-center justify-between gap-3 backdrop-blur-md transition-all duration-300 ${
            scrolled
              ? 'max-w-4xl rounded-full border border-border bg-cream/95 px-4 py-2 shadow-md sm:px-5 sm:py-2.5'
              : 'max-w-6xl border-b border-transparent bg-cream/60 px-6 py-4 sm:px-8'
          }`}
        >
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="shrink-0">
            <Logo />
          </NavLink>

          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <li key={link.to} className="relative">
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative z-10 block rounded-full px-4 py-1.5 text-sm tracking-wide transition-colors ${
                      isActive ? 'text-sage-800' : 'text-muted hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="active-nav-pill"
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-0 -z-10 rounded-full bg-sage-100"
                        />
                      )}
                      {link.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <motion.a
            href="tel:+18258673549"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="hidden flex-none items-center gap-2 rounded-full bg-clay-500 px-4 py-1.5 text-sm font-medium tracking-wide text-cream shadow-sm hover:bg-clay-600 hover:shadow-md sm:inline-flex"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            Let's Talk
          </motion.a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="relative z-30 flex h-9 w-9 flex-none flex-col items-center justify-center gap-[5px] sm:hidden"
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
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-cream sm:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.07 }}
              >
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-display text-4xl font-semibold ${
                      isActive ? 'text-sage-700' : 'text-ink'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.a
              href="tel:+18258673549"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + navLinks.length * 0.07 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-clay-500 px-6 py-3 text-sm font-medium tracking-wide text-cream shadow-sm"
            >
              <PhoneIcon className="h-4 w-4" />
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {scrolled && !menuOpen && (
          <motion.a
            href="tel:+18258673549"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.25 }}
            aria-label="Call Veridian Care Home"
            className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-clay-500 text-cream shadow-lg sm:hidden"
          >
            <PhoneIcon className="h-5 w-5" />
          </motion.a>
        )}
      </AnimatePresence>

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
              The best way to know Veridian is to walk through the door.
            </h2>
            <p className="max-w-md text-cream/70">
              Come with your questions, come with your loved one, or just
              come to look around. We will show you every corner of the
              home and introduce you to the people who would be caring for
              your family.
            </p>
            <motion.a
              href="tel:+18258673549"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-full bg-clay-500 px-6 py-3 text-sm font-medium tracking-wide text-cream shadow-sm hover:bg-clay-600 hover:shadow-md"
            >
              <PhoneIcon className="h-4 w-4" />
              Let's Talk
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

        <div className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 left-1/2 hidden -translate-x-1/2 font-display text-[4.5rem] leading-none font-semibold whitespace-nowrap text-cream/[0.05] italic select-none sm:block lg:text-[6.5rem]"
          >
            Veridian Care Home
          </span>

          <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8">
            <div className="grid gap-12 sm:grid-cols-[1.1fr_1fr_1fr]">
              <div>
                <Logo className="[&_span]:text-cream" iconColor="#ffffff" />
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
                        className="group relative inline-block text-cream/70 transition-colors hover:text-cream"
                      >
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cream/60 transition-all duration-300 group-hover:w-full" />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sm:border-l sm:border-cream/10 sm:pl-10">
                <Eyebrow tone="onDarkest" size="sm">
                  Contact
                </Eyebrow>
                <ul className="mt-4 space-y-3 text-sm text-cream/75">
                  <li>
                    <a
                      href="tel:+18258673549"
                      className="group flex items-center gap-2.5 transition-colors hover:text-cream"
                    >
                      <PhoneIcon className="h-4 w-4 flex-none text-cream/50" />
                      <span className="relative">
                        +1 (825) 867-3549
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cream/50 transition-all duration-300 group-hover:w-full" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@veridiancarehome.inc"
                      className="group flex items-center gap-2.5 transition-colors hover:text-cream"
                    >
                      <MailIcon className="h-4 w-4 flex-none text-cream/50" />
                      <span className="relative">
                        info@veridiancarehome.inc
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cream/50 transition-all duration-300 group-hover:w-full" />
                      </span>
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

              <div className="sm:border-l sm:border-cream/10 sm:pl-10">
                <Eyebrow tone="onDarkest" size="sm">
                  Find Us
                </Eyebrow>
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

            <div className="mt-12 flex items-center justify-between border-t border-cream/10 pt-6">
              <p className="text-xs text-cream/50">
                © {new Date().getFullYear()} Veridian Care Home Inc. All
                rights reserved.
              </p>
              <motion.button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.94 }}
                className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-cream/15 text-cream/60 transition-colors hover:border-cream/30 hover:text-cream"
              >
                <ChevronDownIcon className="h-4 w-4 rotate-180" />
              </motion.button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
