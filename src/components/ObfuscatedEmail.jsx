import { useState } from 'react'
import { MailIcon } from './icons'

// Kept in pieces so the full address is never a single token in the markup
// or bundle for spam harvesters to grab. It is assembled in the browser.
const USER = 'info'
const DOMAIN = 'veridiancarehome'
const TLD = 'inc'
const AT = String.fromCharCode(64)

function ObfuscatedEmail({
  className = '',
  iconClassName = 'h-4 w-4 flex-none text-cream/50',
  underlineClassName = 'bg-cream/50',
}) {
  const [address] = useState(() => USER + AT + DOMAIN + '.' + TLD)

  return (
    <a
      href={'mailto:' + address}
      className={className}
      aria-label="Email Veridian Care Home"
    >
      <MailIcon className={iconClassName} />
      <span className="relative">
        {USER} at {DOMAIN} dot {TLD}
        <span
          className={`absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${underlineClassName}`}
        />
      </span>
    </a>
  )
}

export default ObfuscatedEmail
