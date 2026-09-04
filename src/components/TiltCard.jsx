import { motion, useMotionTemplate, useSpring } from 'framer-motion'

const spring = { stiffness: 300, damping: 25, mass: 0.5 }

function TiltCard({ children, className = '', max = 8 }) {
  const rotateX = useSpring(0, spring)
  const rotateY = useSpring(0, spring)
  const glowX = useSpring(50, spring)
  const glowY = useSpring(50, spring)
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  const glowPosition = useMotionTemplate`${glowX}% ${glowY}%`

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    rotateX.set((0.5 - py) * max * 2)
    rotateY.set((px - 0.5) * max * 2)
    glowX.set(px * 100)
    glowY.set(py * 100)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
    glowX.set(50)
    glowY.set(50)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transformStyle: 'preserve-3d' }}
      className={`group relative ${className}`}
    >
      {children}
      <motion.div
        aria-hidden="true"
        style={{
          background: useMotionTemplate`radial-gradient(180px circle at ${glowPosition}, color-mix(in srgb, var(--color-gold-400) 22%, transparent), transparent 70%)`,
        }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.div>
  )
}

export default TiltCard
