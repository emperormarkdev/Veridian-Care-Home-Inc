import Eyebrow from '../components/Eyebrow'
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
          <Eyebrow icon>Our Vision</Eyebrow>
          <div className="mt-6 h-1 w-14 rounded-full bg-clay-500" />
          <p className="mt-10 font-display text-3xl leading-snug font-semibold sm:text-4xl">
            To be a trusted leader in exceptional care, creating a community where every individual can live with dignity, purpose, independence, and joy. Supported by compassionate professionals who treat every resident as family.
          </p>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted">
            <p>
              Real comfort means having the freedom to choose your own path. We design our days around your personal schedule, ensuring you have the support needed to stay self-reliant, chase your favorite hobbies, and wake up with a sense of excitement.

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
