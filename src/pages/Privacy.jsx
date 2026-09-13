import Eyebrow from '../components/Eyebrow'
import ObfuscatedEmail from '../components/ObfuscatedEmail'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { PhoneIcon } from '../components/icons'

const LAST_UPDATED = 'September 2026'

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-xl font-medium text-ink">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  )
}

function Privacy() {
  return (
    <div className="overflow-x-clip">
      <Seo
        title="Privacy Policy | Veridian Care Home"
        description="How Veridian Care Home Inc. collects, uses, and protects personal information on veridiancarehome.inc, in line with Alberta's PIPA and Canada's PIPEDA."
        path="/privacy"
      />
      <section className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <Eyebrow>Privacy</Eyebrow>
          <div className="mt-6 h-1 w-14 rounded-full bg-clay-500" />
          <h1 className="mt-8 text-4xl font-semibold sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted">
            Last updated: {LAST_UPDATED}
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-14 space-y-10 text-base leading-relaxed text-muted"
        >
          <p>
            This policy explains how Veridian Care Home Inc. handles personal
            information collected through this website,{' '}
            <span className="whitespace-nowrap">veridiancarehome.inc</span>. It
            is written to reflect how the site actually works today: there is
            no contact form, no account to create, and no advertising or
            analytics tracking. Care provided inside our home is governed by
            separate health-privacy obligations and is not covered here.
          </p>

          <Section title="Information we collect">
            <p>
              <span className="font-medium text-ink">
                Information you send us.
              </span>{' '}
              If you phone or email us, we receive whatever you choose to
              share &mdash; typically your name, contact details, and what you
              tell us about your family&rsquo;s situation. These messages sit
              in our email inbox.
            </p>
            <p>
              <span className="font-medium text-ink">Website logs.</span> Our
              hosting provider automatically records standard technical
              information for each visit, such as your IP address, browser
              type, and the pages requested. This is used to keep the site
              running and secure.
            </p>
            <p>
              <span className="font-medium text-ink">Local storage.</span> When
              you answer the cookie notice, your choice is saved in your
              browser&rsquo;s local storage so we do not ask again. It holds no
              personal information and is never sent to us.
            </p>
            <p>
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
            </p>
          </Section>

          <Section title="How we use your information">
            <p>We use the information above only to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>respond to your enquiry and arrange a visit or care;</li>
              <li>keep the website available, secure, and working correctly;</li>
              <li>meet our legal and regulatory obligations.</li>
            </ul>
          </Section>

          <Section title="Sharing and disclosure">
            <p>
              We do not sell or rent your personal information. We share it
              only with the service providers that operate this site and our
              contact channels on our behalf &mdash; our website host (Vercel)
              and our domain registrar and email provider (Spaceship, whose
              mailboxes are provided as Spacemail) &mdash; and only as needed
              for them to provide that service. We may also disclose
              information where required by law or to protect the safety of a
              resident.
            </p>
          </Section>

          <Section title="Where your information is held">
            <p>
              This website is hosted on servers located in the United States,
              and our email is handled by a third-party provider. Website
              logs and any message you send us may therefore be stored or
              processed outside Canada, where local laws may allow access by
              courts, law enforcement, and government authorities.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              We keep enquiry emails only as long as needed to help your
              family, and to meet any record-keeping duties we have, after
              which they are deleted. Hosting logs are retained on a short
              rolling basis by our provider.
            </p>
          </Section>

          <Section title="Your choices and rights">
            <p>
              Under Canada&rsquo;s Personal Information Protection and
              Electronic Documents Act (PIPEDA) and Alberta&rsquo;s Personal
              Information Protection Act (PIPA), you may ask us to see the
              personal information we hold about you, ask us to correct it,
              or ask us to delete it. You can also withdraw your consent to
              our use of it at any time, though that may limit our ability to
              respond to your enquiry. To make a request, contact us using
              the details below.
            </p>
            <p>
              You can clear your browser&rsquo;s site data at any time to
              reset the cookie-notice choice and remove the Google Maps
              cookies.
            </p>
          </Section>

          <Section title="Children">
            <p>
              This website is intended for adults making care decisions for
              their families. It is not directed at children, and we do not
              knowingly collect their personal information.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              If we change how the site works &mdash; for example, adding a
              contact form or analytics &mdash; we will update this page and
              change the date at the top.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              For any privacy question or request, or to raise a concern,
              reach our team at:
            </p>
            <ul className="space-y-3 pt-1">
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
              <li className="text-sm">
                Veridian Care Home Inc.
                <br />
                10925 97 St NW, Edmonton, AB T5H 2M7
              </li>
            </ul>
            <p>
              If you are not satisfied with our response, you may contact the{' '}
              <a
                href="https://oipc.ab.ca/"
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-sage-700 underline underline-offset-2 hover:text-sage-800"
              >
                Office of the Information and Privacy Commissioner of Alberta
              </a>
              .
            </p>
          </Section>

          <p className="border-t border-border pt-6 text-sm">
            This policy describes our current practices and should be reviewed
            by legal counsel before launch.
          </p>
        </Reveal>
      </section>
    </div>
  )
}

export default Privacy
