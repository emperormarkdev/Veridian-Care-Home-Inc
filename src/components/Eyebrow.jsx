const tones = {
  default: 'text-sage-600',
  onDark: 'text-sage-300',
  onDarkest: 'text-cream/60',
}

const sizes = {
  md: 'text-lg sm:text-xl',
  sm: 'text-base',
}

function Eyebrow({ children, tone = 'default', size = 'md', icon = false, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-display italic ${sizes[size]} ${tones[tone]} ${className}`}
    >
      {icon && <span className="text-gold-500 not-italic">✦</span>}
      {children}
    </span>
  )
}

export default Eyebrow
