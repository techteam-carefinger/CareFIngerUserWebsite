import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="CareFinger home">
      <img src="/logo.png" alt="" />
    </Link>
  )
}
