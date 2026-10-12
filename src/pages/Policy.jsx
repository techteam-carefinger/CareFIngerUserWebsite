import { useLocation } from 'react-router-dom'
import { importantNotice, earningsNote, supportEmail } from '../content.js'
import NotFound from './NotFound.jsx'

const PAGES = {
  privacy: {
    eyebrow: 'Privacy Policy',
    title: 'How to reach Carefinger about your information.',
    intro:
      'Questions about information related to a booking, a partner registration, or this website can be sent to the Carefinger support address. You will get a resolution within 1–8 hours.',
  },
  terms: {
    eyebrow: 'Terms and Conditions',
    title: 'How Carefinger assistance is offered.',
    intro:
      'Carefinger assistance is booked through the app and is limited to the service you select.',
  },
  'partner-terms': {
    eyebrow: 'Partner Terms',
    title: 'Working as a Carefinger Partner.',
    intro: `Partners receive opportunities to provide approved health assistance services. Earn up to ₹50,000+ per month. ${earningsNote}`,
  },
}

export default function Policy() {
  const { pathname } = useLocation()
  const page = PAGES[pathname.replace('/', '')]

  if (!page) {
    return <NotFound />
  }

  return (
    <section className="page wrap narrow">
      <p className="eyebrow">{page.eyebrow}</p>
      <h1>{page.title}</h1>
      <p className="lede">{page.intro}</p>
      <div className="notice">
        <p className="eyebrow">Important information</p>
        {importantNotice.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </div>
    </section>
  )
}
