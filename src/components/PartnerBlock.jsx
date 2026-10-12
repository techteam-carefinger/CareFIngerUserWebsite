import { earningsNote, partnerPoints } from '../content.js'
import StoreButtons from './StoreButtons.jsx'

export default function PartnerBlock() {
  return (
    <div className="partner-layout">
      <div>
        <p className="eyebrow">Become a Carefinger Partner</p>
        <h2>Be your own boss. Be someone’s helping hand.</h2>
        <p>
          Do you want to earn by providing assistance to people who need support during
          hospital and healthcare visits? Download the Carefinger Partner app and get
          assistance in minutes for further information.
        </p>
        <p>
          As a Carefinger Partner, you can receive opportunities to provide approved
          health assistance services to customers through the Carefinger platform.
        </p>
        <StoreButtons />
      </div>
      <aside className="earn-card">
        <p>Why become a Carefinger Partner?</p>
        <ul>
          {partnerPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <strong>Earn up to ₹50,000+ per month*</strong>
        <small>* {earningsNote}</small>
      </aside>
    </div>
  )
}
