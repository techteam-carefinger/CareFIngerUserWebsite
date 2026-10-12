import PartnerBlock from '../components/PartnerBlock.jsx'
import { earningsNote } from '../content.js'

export default function Partner() {
  return (
    <section className="page wrap">
      <PartnerBlock />
      <div className="notice partner-note">
        <p>
          Download the Carefinger Partner app and register today. Flexible work
          opportunities, app-based assignments, and earnings through completed services.
        </p>
        <p>* Earn up to ₹50,000+ per month. {earningsNote}</p>
      </div>
    </section>
  )
}
