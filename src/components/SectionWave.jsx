function SectionWave({ fill = 'fill-sage-800', flip = false, className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 -bottom-px overflow-hidden leading-[0] ${className}`}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`h-[46px] w-full sm:h-[64px] ${flip ? 'rotate-180' : ''}`}
      >
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,96 1440,40 L1440,80 L0,80 Z"
          className={fill}
        />
      </svg>
    </div>
  )
}

export default SectionWave
