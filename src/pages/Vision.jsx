import PhotoFrame from '../components/PhotoFrame'
import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import { visionPortrait } from '../data/photos'

function Vision() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.85fr_1fr] lg:py-32">
        <Reveal>
          <TiltCard max={5} className="rounded-[3rem_1.25rem_3rem_1.25rem] sm:rounded-[4.5rem_1.5rem_4.5rem_1.5rem]">
            <PhotoFrame
              src={visionPortrait}
              alt="Residents and staff sharing a moment in the garden at Veridian Care Home. PLACEHOLDER, replace with a real Veridian photo."
              tone="clay"
              intensity={0.3}
              priority
              className="aspect-[4/5] w-full shadow-xl"
            />
          </TiltCard>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.2em] text-sage-600 uppercase">
            <span className="text-gold-500">✦</span>
            Our Vision
          </span>
          <div className="mt-6 h-1 w-14 rounded-full bg-clay-500" />
          <p className="mt-10 font-display text-3xl leading-snug font-semibold sm:text-4xl">
            A future where senior care is defined by warmth and trust, not
            by routine.
          </p>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted">
            <p>
              We envision a community where families never have to choose
              between quality care and a place that feels like home. Where
              every resident is met with patience, every staff member is
              empowered to care deeply, and every day holds space for
              connection.
            </p>
            <p>
              As we grow, we remain committed to setting a new standard for
              what senior care can be. Rooted in respect, guided by
              empathy, and built to last.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border bg-sage-900">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold text-cream sm:text-4xl">
              Looking ahead, together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/70">
              Our vision only means something if families feel it in every
              visit. We'd love to show you what that looks like in person.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default Vision
