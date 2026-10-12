import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page wrap narrow">
      <p className="eyebrow">404</p>
      <h1>That page is not on Carefinger.</h1>
      <p className="lede">The address does not match a page on this site.</p>
      <Link className="btn btn-solid" to="/">
        Back to home
      </Link>
    </section>
  )
}
