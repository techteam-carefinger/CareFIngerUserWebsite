import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Logo from './Logo.jsx'

const LINKS = [
  { to: '/#services', label: 'Services' },
  { to: '/#how', label: 'How it works' },
  { to: '/#who', label: 'Who it’s for' },
  { to: '/partner', label: 'Partner' },
  { to: '/#founders', label: 'Founders' },
  { to: '/#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <Logo />
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span />
          <span />
        </button>
        <nav id="site-menu" className={open ? 'nav-links open' : 'nav-links'}>
          {LINKS.map((link) =>
            link.to.startsWith('/#') ? (
              <Link key={link.to} to={link.to} onClick={close}>
                {link.label}
              </Link>
            ) : (
              <NavLink key={link.to} to={link.to} onClick={close}>
                {link.label}
              </NavLink>
            ),
          )}
          <Link className="btn btn-solid nav-cta" to="/#download" onClick={close}>
            Download
          </Link>
        </nav>
      </div>
    </header>
  )
}
