import PhotoFrame from '../components/PhotoFrame'
import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import { missionPortrait } from '../data/photos'

function Mission() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_0.85fr] lg:py-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.2em] text-sage-600 uppercase">
            <span className="text-gold-500">✦</span>
            Our Mission
          </span>
          <div className="mt-6 h-1 w-14 rounded-full bg-clay-500" />
          <p className="mt-10 font-display text-3xl leading-snug font-semibold sm:text-4xl">
            To provide every resident with attentive, individualized care
            that honors their dignity, independence, and story.
          </p>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted">
            <p>
              At Veridian, we believe growing older should never mean
              becoming invisible. Our mission is simple. We want to build a
              home, not a facility, where every resident is treated as a
              whole person with a history, preferences, and a voice that
              still matters.
            </p>
            <p>
              We hold ourselves to a standard that goes beyond checklists.
              That means consistent staff who genuinely know your family
              member, daily routines shaped around their comfort, and a
              place that never feels like it is running on convenience
              alone.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="order-first lg:order-last">
          <TiltCard max={5} className="rounded-[3rem_1.25rem_3rem_1.25rem] sm:rounded-[4.5rem_1.5rem_4.5rem_1.5rem]">
            <PhotoFrame
              src={missionPortrait}
              alt="A caregiver attentively assisting a resident at Veridian Care Home. PLACEHOLDER, replace with a real Veridian photo."
              intensity={0.35}
              priority
              className="aspect-[4/5] w-full shadow-xl"
            />
          </TiltCard>
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:grid-cols-3 sm:px-8">
          {[
            {
              title: 'Dignity First',
              body: 'Every decision we make starts with respect for who a resident is, not only what they need.',
            },
            {
              title: 'Consistency Matters',
              body: 'The same familiar faces greet you day after day. Never a revolving door of strangers your family member has to get used to all over again.',
            },
            {
              title: 'Comfort Over Convenience',
              body: 'Routines are shaped around residents, never around staff schedules or old institutional habits.',
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="h-1 w-10 rounded-full bg-sage-600" />
              <h2 className="mt-5 text-xl font-medium">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Mission
