import Eyebrow from '../components/Eyebrow'
import PhotoFrame from '../components/PhotoFrame'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import TiltCard from '../components/TiltCard'
import { missionPortrait } from '../data/photos'

function Mission() {
  return (
    <div className="overflow-x-clip">
      <Seo
        title="Our Mission | Veridian Care Home"
        description="Veridian Care Home's mission: compassionate, person-centred care that protects the dignity, independence, and wellbeing of every resident in Edmonton, AB."
        path="/mission"
        breadcrumb="Our Mission"
      />
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_0.85fr] lg:py-32">
        <Reveal>
          <Eyebrow>Our Mission</Eyebrow>
          <div className="mt-6 h-1 w-14 rounded-full bg-clay-500" />
          <h1 className="mt-10 font-display text-3xl leading-snug font-semibold sm:text-4xl">
            To provide compassionate, high quality, and person-centred care that enhances the wellbeing, dignity, independence, and quality of life of every individual we serve.

          </h1>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted">
            <p>
              At Veridian Care Home, we are committed to creating a safe, welcoming, and supportive environment where residents feel valued, respected, and truly at home.
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
              alt="A caregiver attentively assisting a resident at Veridian Care Home."
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
              body: 'The same familiar faces greet you day after day. Never a revolving door of strangers your loved one has to get used to all over again.',
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
