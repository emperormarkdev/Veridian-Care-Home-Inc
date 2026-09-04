const radii = {
  organic:
    'rounded-[3rem_1.25rem_3rem_1.25rem] sm:rounded-[4.5rem_1.5rem_4.5rem_1.5rem]',
  soft: 'rounded-[2rem]',
  pill: 'rounded-full',
}

const tones = {
  sage: 'bg-sage-800',
  clay: 'bg-clay-700',
}

function PhotoFrame({
  src,
  alt,
  tone = 'sage',
  intensity = 0.45,
  rounded = 'organic',
  priority = false,
  className = '',
  imgClassName = '',
  children,
}) {
  return (
    <div
      className={`relative overflow-hidden ${radii[rounded] ?? radii.organic} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className={`h-full w-full object-cover ${imgClassName}`}
        style={{ filter: 'grayscale(1) contrast(1.05)' }}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 mix-blend-multiply ${tones[tone] ?? tones.sage}`}
        style={{ opacity: intensity }}
      />
      {children}
    </div>
  )
}

export default PhotoFrame
