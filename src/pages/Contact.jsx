import { founders, supportEmail } from '../content.js'

export default function Contact() {
  return (
    <section className="page wrap narrow">
      <p className="eyebrow">Contact us</p>
      <h1>Need assistance?</h1>
      <p className="lede">
        For support, mail the Carefinger team. You will get a resolution within 1–8 hours.
      </p>
      <div className="contact-list">
        <a className="card" href={`mailto:${supportEmail}`}>
          <span>Support</span>
          <strong>{supportEmail}</strong>
        </a>
        {founders.map((person) => (
          <a className="card" key={person.email} href={`mailto:${person.email}`}>
            <span>
              {person.name}, {person.role}
            </span>
            <strong>{person.email}</strong>
          </a>
        ))}
      </div>
    </section>
  )
}
