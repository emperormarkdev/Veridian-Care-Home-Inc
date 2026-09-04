function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="14" className="fill-sage-700" />
        <path
          d="M14 6c4.5 1 8 4.6 8 9.2 0 4.3-3.4 7.3-8 8.3-4.6-1-8-4-8-8.3C6 10.6 9.5 7 14 6z"
          className="fill-cream"
        />
        <path
          d="M14 9v13.2"
          stroke="var(--color-sage-700)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-lg font-medium text-ink">
        Veridian
      </span>
    </span>
  )
}

export default Logo
