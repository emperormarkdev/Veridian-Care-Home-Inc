import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import AccordionItem from '../components/AccordionItem'
import Button from '../components/Button'
import PhotoFrame from '../components/PhotoFrame'
import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import { galleryPhotos, heroPortrait, highlightPhotos } from '../data/photos'

const highlights = [
  {
    title: 'Personalized Care',
    body: 'We sit down with every family before move-in day and shape a care plan around the routines, preferences, and life story of the person we are caring for. No two plans look the same, because no two people are the same.',
    image: highlightPhotos.personalizedCare,
  },
  {
    title: 'A Warm Community',
    body: 'We fill our days with shared meals, quiet mornings, and time in the garden whenever the weather allows. This is a home first, and we work hard to keep it feeling that way.',
    image: highlightPhotos.community,
  },
  {
    title: 'A Team That Cares',
    body: 'Our team is trained and attentive, but more than that, they genuinely care. You will notice it in the small things, like remembering exactly how someone takes their tea.',
    image: highlightPhotos.team,
  },
]

const approach = [
  {
    title: 'Getting to Know You',
    body: 'Before we write a single care plan, we sit down with you and really listen. What did your loved one do for work? What makes them laugh? That is where we start.',
  },
  {
    title: 'Familiar Faces',
    body: 'We are keeping our team small on purpose, so your family member is cared for by people they recognize and trust, not a rotating cast of strangers.',
  },
  {
    title: 'A Home, Not a Facility',
    body: 'From shared meals to quiet afternoons, we want every day here to feel less like a schedule and more like life.',
  },
  {
    title: 'Always Reachable',
    body: 'Questions do not wait for office hours. Call us any time and you will speak with someone who actually knows your family member by name.',
  },
]

const services = [
  {
    title: 'Personal Care',
    body: 'Help with the small, personal moments of the day, like bathing, dressing, and getting ready, handled with patience and respect for privacy.',
  },
  {
    title: 'Medication Support',
    body: 'Our team helps keep track of medications and appointments, so families do not have to carry that worry alone.',
  },
  {
    title: 'Meals & Nutrition',
    body: 'Home-cooked meals made with real ingredients, served at a table where eating together still feels like a good part of the day.',
  },
  {
    title: 'Activities & Connection',
    body: 'Games, conversation, music, and quiet company. Whatever helps someone feel most like themselves.',
  },
]

const faqs = [
  {
    question: 'Are you currently accepting new residents?',
    answer:
      'Yes, we are welcoming new residents right now. Reach out and tell us a little about your family, and we will let you know how we can help.',
  },
  {
    question: 'What levels of care do you provide?',
    answer:
      'Every plan looks a little different. Some residents need help with daily living, others need more attentive nursing support. We build the plan around the person, not the other way around.',
  },
  {
    question: 'Can family members visit anytime?',
    answer:
      'Family is always welcome here. Give us a call and we will walk you through the best times to visit so you can spend meaningful time together.',
  },
  {
    question: 'How do I schedule a tour?',
    answer:
      'Call +1 (825) 867-3549 or email info@veridiancarehome.inc, and we will find a time that works for your family.',
  },
]

const headlineLines = [
  ['Compassionate', 'care,'],
  ['rooted', 'in', 'dignity.'],
]

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}

const wordReveal = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Home() {
  const heroRef = useRef(null)
  const spotX = useMotionValue(50)
  const spotY = useMotionValue(50)
  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${spotX}% ${spotY}%, color-mix(in srgb, var(--color-gold-400) 12%, transparent), transparent 70%)`

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroImageY = useTransform(heroProgress, [0, 1], [0, 90])
  const heroImageScale = useTransform(heroProgress, [0, 1], [1, 1.08])

  function handleHeroMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    spotX.set(((event.clientX - rect.left) / rect.width) * 100)
    spotY.set(((event.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <div className="overflow-x-clip">
      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative overflow-hidden"
      >
        <motion.div
          aria-hidden="true"
          style={{ background: spotlightBackground }}
          className="pointer-events-none absolute inset-0 hidden sm:block"
        />
        <motion.div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-sage-100 blur-3xl sm:right-[-5%]"
        />
        <motion.div
          aria-hidden="true"
          className="animate-float-slower pointer-events-none absolute top-32 left-[-10%] h-[300px] w-[300px] rounded-full bg-clay-100 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.2em] text-sage-600 uppercase"
            >
              <span className="text-gold-500">✦</span>
              Veridian Care Home
            </motion.span>

            <motion.h1
              variants={wordContainer}
              initial="hidden"
              animate="show"
              className="mt-6 text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl"
            >
              {headlineLines.map((line, lineIndex) => (
                <span key={lineIndex} className="block">
                  {line.map((word) => (
                    <span
                      key={word}
                      className="mr-3 inline-block overflow-hidden align-bottom last:mr-0"
                    >
                      <motion.span variants={wordReveal} className="inline-block">
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0"
            >
              Growing older shouldn't mean compromising your individuality. At Veridian, we reject the rigid schedules and clinical checklists of traditional care. Instead, our residents wake up to personal greetings, continue the hobbies they love, and shape their own days. We have built a community anchored by people who take the time to truly know you. It’s simple: we provide the exact level of respect, warmth, and high-touch care we would want for our own families. No exceptions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <Button to="/mission" variant="primary">
                Our Mission
              </Button>
              <Button to="/vision" variant="secondary">
                Our Vision
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            <motion.div style={{ y: heroImageY }}>
              <motion.div style={{ scale: heroImageScale }}>
                <PhotoFrame
                  src={heroPortrait}
                  alt="A resident and caregiver sharing a warm moment at Veridian Care Home. PLACEHOLDER, replace with a real Veridian photo."
                  intensity={0.35}
                  priority
                  className="aspect-[4/5] w-full shadow-xl"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 hidden max-w-[240px] rounded-2xl border border-gold-300/60 bg-surface p-5 shadow-lg sm:block"
            >
              <p className="font-display text-2xl font-semibold text-sage-700">
                Care That Feels Personal
              </p>
              <p className="mt-1 text-sm leading-snug text-muted">
                Every resident here is known by name, by story, and by what makes them laugh. We believe true care is rooted in deep connection.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border bg-sage-800">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
          <Reveal className="max-w-xl">
            <span className="text-sm font-medium tracking-[0.2em] text-sage-300 uppercase">
              Our Approach
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-cream sm:text-4xl">
              What guides how we care for your family.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="text-left">
                <div className="h-1 w-10 rounded-full bg-gold-400" />
                <h3 className="mt-5 text-lg font-medium text-cream">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <Reveal className="max-w-xl">
            <span className="text-sm font-medium tracking-[0.2em] text-sage-600 uppercase">
              Why families choose us
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Care that feels personal, in a place that feels like home.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1} className="text-left">
                <TiltCard max={6} className="rounded-3xl">
                  <PhotoFrame
                    src={item.image}
                    alt="PLACEHOLDER photo, replace with a real Veridian photo."
                    tone="clay"
                    intensity={0.3}
                    rounded="soft"
                    className="aspect-square w-full"
                  />
                  <h3 className="mt-6 text-xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <Reveal className="max-w-xl">
            <span className="text-sm font-medium tracking-[0.2em] text-sage-600 uppercase">
              A glimpse inside
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Everyday moments at Veridian.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {galleryPhotos.map((photo, index) => (
              <Reveal key={photo.src} delay={index * 0.08}>
                <TiltCard max={10} className="rounded-2xl">
                  <PhotoFrame
                    src={photo.src}
                    alt={`${photo.alt}. PLACEHOLDER, replace with a real Veridian photo.`}
                    rounded="soft"
                    intensity={0.2}
                    className="aspect-[3/4] w-full shadow-sm"
                  />
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <Reveal className="max-w-xl">
            <span className="text-sm font-medium tracking-[0.2em] text-sage-600 uppercase">
              What we offer
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Support for every part of daily life.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="text-left">
                <div className="h-1 w-10 rounded-full bg-sage-600" />
                <h3 className="mt-5 text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8">
          <Reveal className="flex flex-col items-center gap-6 text-center">
            <span
              aria-hidden="true"
              className="font-display text-6xl leading-none text-gold-400"
            >
              "
            </span>
            <p className="font-display text-2xl leading-snug font-medium text-ink sm:text-3xl">
              We treat every person who walks through our doors the way we
              would want our own family treated, with patience, honesty,
              and care that never feels rushed.
            </p>
            <p className="text-sm font-medium text-sage-700">
              From all of us at Veridian Care Home
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8">
          <Reveal className="text-center">
            <span className="text-sm font-medium tracking-[0.2em] text-sage-600 uppercase">
              Questions
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Frequently asked questions.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </Reveal>
        </div>
      </section>

    </div>
  )
}

export default Home
