const tones = {
  default: 'text-sage-600',
  onDark: 'text-sage-300',
  onDarkest: 'text-cream/60',
}

const sizes = {
  md: 'text-lg sm:text-xl',
  sm: 'text-base',
}

function Eyebrow({ children, tone = 'default', size = 'md', className = '' }) {
  return (
    <span
      className={`inline-flex items-center font-display italic ${sizes[size]} ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Eyebrow
