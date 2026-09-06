import Eyebrow from '../components/Eyebrow'
import ObfuscatedEmail from '../components/ObfuscatedEmail'
import Reveal from '../components/Reveal'
import { PhoneIcon } from '../components/icons'

const lastUpdated = 'September 2026'

function Privacy() {
  return (
    <div className="overflow-x-clip">
      <section className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <Eyebrow icon>Privacy</Eyebrow>
          <div className="mt-6 h-1 w-14 rounded-full bg-clay-500" />
          <h1 className="mt-8 text-4xl font-semibold sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: {lastUpdated}</p>
          <p className="mt-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-muted">
            This is a plain-language draft. It should be reviewed by legal
            counsel and expanded before launch, especially if a contact or
            enquiry form is added.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 space-y-10 text-base leading-relaxed text-muted">
          <div>
            <h2 className="text-xl font-medium text-ink">Who we are</h2>
            <p className="mt-3">
              Veridian Care Home Inc. operates a senior care home at 10925 97
              St NW, Edmonton, Alberta, and publishes this website to share
              information about that home.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-ink">
              What this website collects
            </h2>
            <p className="mt-3">
              We do not run advertising or analytics tracking, and we do not
              ask you to create an account. Browsing the site does not require
              you to share any personal information.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-ink">Essential storage.</span>{' '}
                A single entry in your browser&rsquo;s local storage remembers
                your choice about the map embed below. It contains no personal
                data and is never sent to us.
              </li>
              <li>
                <span className="font-medium text-ink">Server logs.</span> Our
                hosting provider may keep standard technical logs (such as IP
                address and browser type) to keep the site secure and online.
              </li>
              <li>
                <span className="font-medium text-ink">Google Maps.</span> The
                location map in the footer loads only after you allow it. Once
                loaded, Google may set its own cookies and receive your IP
                address under{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium text-sage-700 underline underline-offset-2 hover:text-sage-800"
                >
                  Google&rsquo;s privacy policy
                </a>
                .
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium text-ink">
              If you contact us
            </h2>
            <p className="mt-3">
              When you phone or email us, we use the details you provide only
              to respond to your enquiry and to arrange care. We do not sell
              or share this information, and we keep it only as long as needed
              for that purpose or as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-ink">Your choices</h2>
            <p className="mt-3">
              You can clear your browser storage at any time to reset the map
              choice. You may also ask us what information we hold about you
              from an enquiry, and ask us to correct or delete it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-ink">Contact</h2>
            <p className="mt-3">
              For any privacy question, reach us at:
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+18258673549"
                  className="group inline-flex items-center gap-2.5 text-ink transition-colors hover:text-sage-700"
                >
                  <PhoneIcon className="h-4 w-4 flex-none text-muted" />
                  +1 (825) 867-3549
                </a>
              </li>
              <li>
                <ObfuscatedEmail
                  className="group inline-flex items-center gap-2.5 text-ink transition-colors hover:text-sage-700"
                  iconClassName="h-4 w-4 flex-none text-muted"
                  underlineClassName="bg-sage-700/50"
                />
              </li>
            </ul>
          </div>
        </Reveal>
      </section>
    </div>
  )
}

export default Privacy
