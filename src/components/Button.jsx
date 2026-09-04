import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 ease-out'

const variants = {
  primary:
    'bg-sage-700 text-cream shadow-sm hover:bg-sage-800 hover:shadow-md active:bg-sage-900',
  secondary:
    'border border-sage-700 text-sage-700 hover:bg-sage-50 active:bg-sage-100',
  accent:
    'bg-clay-500 text-cream shadow-sm hover:bg-clay-600 hover:shadow-md active:bg-clay-700',
  ghost: 'text-sage-700 hover:bg-sage-50 active:bg-sage-100',
  'ghost-light':
    'border border-cream/30 text-cream hover:bg-cream/10 active:bg-cream/15',
}

const motionProps = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.96 },
  transition: { duration: 0.18, ease: 'easeOut' },
}

function Button({
  variant = 'primary',
  to,
  href,
  className = '',
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`.trim()

  if (to) {
    return (
      <motion.div className="inline-block" {...motionProps}>
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  )
}

export default Button
