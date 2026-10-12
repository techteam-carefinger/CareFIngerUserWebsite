import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { supportEmail } from '../content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo light />
          <p className="footer-lead">
            Healthcare assistance. Hospital support. Care assistance.
          </p>
          <p className="footer-lead">When you can’t be there, we are.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link to="/#services">Services</Link>
          <Link to="/#how">How it works</Link>
          <Link to="/#founders">Founders</Link>
          <Link to="/#faq">FAQ</Link>
        </div>
        <div>
          <h2>Partner</h2>
          <Link to="/partner">Become a partner</Link>
          <Link to="/partner-terms">Partner terms</Link>
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        </div>
        <div>
          <h2>Legal</h2>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms and Conditions</Link>
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
      <div className="wrap footer-bar">
        <span>© 2026 Carefinger. All rights reserved.</span>
        <span>When you can’t be there, we are.</span>
      </div>
    </footer>
  )
}
