import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Carefinger home">
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <rect width="36" height="36" rx="10" fill="currentColor" />
        <circle cx="18" cy="18" r="8" fill="none" stroke={light ? '#0C3D46' : '#F4EFE6'} strokeWidth="1.7" />
        <circle cx="18" cy="18" r="3.2" fill="#E07A4C" />
      </svg>
      <span>Carefinger</span>
    </Link>
  )
}
