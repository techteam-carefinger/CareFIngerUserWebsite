import { Link } from 'react-router-dom'
import FaqList from '../components/FaqList.jsx'
import PartnerBlock from '../components/PartnerBlock.jsx'
import StoreButtons from '../components/StoreButtons.jsx'
import StoryFilm from '../components/StoryFilm.jsx'
import {
  audiences,
  founders,
  importantNotice,
  reasons,
  services,
  steps,
  supportEmail,
} from '../content.js'

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div>
          <p className="eyebrow">Healthcare and hospital assistance at your fingertips</p>
          <h1>
            When you can’t be there, <em>we are.</em>
          </h1>
          <p className="lede">
            When your loved one needs to visit a hospital, doctor, diagnostic centre, or
            healthcare facility and you cannot be there personally, Carefinger is here to
            help. Book trained and verified Care Assistants for healthcare-related visits
            and tasks.
          </p>
          <p className="download-kicker">Get assistance when you need it.</p>
          <StoreButtons />
        </div>
        <StoryFilm />
      </section>

      <section className="wrap section story" id="story">
        <div>
          <p className="eyebrow">For the moments you cannot attend</p>
          <h2>When you can’t be there for your loved ones.</h2>
        </div>
        <div>
          <p>
            Life does not always allow us to be present when our family needs us. Work
            commitments. Travel. Distance. Emergencies. Personal responsibilities.
          </p>
          <p>
            When your loved one needs someone to accompany them to a hospital, doctor
            appointment, diagnostic centre, or healthcare facility, you should not have to
            worry about them being alone.
          </p>
          <p>
            <strong>That’s where Carefinger comes in.</strong> Carefinger connects you with
            trained and verified Care Assistants who can provide assistance during healthcare
            and hospital-related visits.
          </p>
        </div>
      </section>

      <section className="wrap section" id="services">
        <div className="section-head">
          <p className="eyebrow">What is Carefinger?</p>
          <h2>An app for healthcare and hospital assistance.</h2>
          <p>
            Carefinger is an app-based healthcare and hospital assistance platform designed
            to make healthcare journeys easier for individuals and families. Through the app,
            you can book a Care Assistant for these requirements.
          </p>
        </div>
        <div className="card-grid three">
          {services.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band" id="how">
        <div className="wrap">
          <div className="section-head light">
            <p className="eyebrow">How Carefinger works</p>
            <h2>From download to someone on the ground.</h2>
          </div>
          <ol className="steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap section" id="why">
        <div className="section-head">
          <p className="eyebrow">Why choose Carefinger?</p>
          <h2>Assistance arranged around the visit.</h2>
        </div>
        <div className="card-grid three">
          {reasons.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section" id="who">
        <div className="section-head">
          <p className="eyebrow">Who can use Carefinger?</p>
          <h2>Carefinger is built for those moments.</h2>
        </div>
        <div className="card-grid three">
          {audiences.map((item) => (
            <article className="card audience" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section split" id="mission">
        <div>
          <p className="eyebrow">Our mission</p>
          <h2>Making healthcare assistance more accessible.</h2>
          <p>
            To make reliable healthcare assistance accessible whenever and wherever families
            need an extra helping hand.
          </p>
          <p>
            Healthcare journeys should be less stressful, more organised and easier to
            manage. Carefinger is designed to bridge the gap between being needed and being
            physically present.
          </p>
        </div>
        <div className="quote" id="vision">
          <p className="eyebrow">Our vision</p>
          <h2>A helping hand, whenever you need one.</h2>
          <p>
            We envision a future where families don’t have to struggle simply because they
            cannot physically accompany their loved ones during every healthcare visit.
          </p>
          <p>
            Carefinger aims to create a trusted network of trained and verified Care
            Assistants who can provide assistance across cities and healthcare facilities.
          </p>
          <p>
            <strong>No loved one should feel alone simply because family cannot be physically present.</strong>
          </p>
        </div>
      </section>

      <section className="wrap section narrow-copy">
        <p className="eyebrow">More than assistance</p>
        <h2>A helping hand.</h2>
        <p>
          Healthcare situations can be stressful. There may be registrations, queues,
          reports, appointments, pharmacy visits, transportation, basic coordination and
          many other small tasks that can become overwhelming when someone has to manage
          everything alone.
        </p>
        <p>
          Carefinger aims to provide a dependable helping hand for these healthcare
          assistance requirements.
        </p>
        <p>
          <strong>Because sometimes, being there means making sure someone else is there.</strong>
        </p>
      </section>

      <section className="download-band" id="download">
        <div className="wrap download-inner">
          <div>
            <p className="eyebrow">Download Carefinger</p>
            <h2>Your loved ones deserve someone by their side.</h2>
            <p>
              Whether you are at work, travelling, living in another city, or simply unable
              to be physically present, Carefinger can help you arrange healthcare-related
              assistance for your loved ones.
            </p>
          </div>
          <div>
            <p className="download-kicker">Available on</p>
            <StoreButtons />
          </div>
        </div>
      </section>

      <section className="wrap section" id="partner">
        <PartnerBlock />
        <p className="more-link">
          <Link to="/partner">Partner details</Link>
        </p>
      </section>

      <section className="wrap section" id="founders">
        <div className="section-head">
          <p className="eyebrow">Meet the founders</p>
          <h2>The people building Carefinger.</h2>
        </div>
        <div className="founder-grid">
          {founders.map((person) => (
            <article className="card founder" key={person.email}>
              <p className="role">{person.role}</p>
              <h3>{person.name}</h3>
              <p className="experience">{person.experience}</p>
              <p>{person.text}</p>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section faq-section" id="faq">
        <div className="section-head">
          <p className="eyebrow">Frequently asked questions</p>
          <h2>Answers before you book.</h2>
        </div>
        <FaqList />
      </section>

      <section className="wrap section" id="important">
        <div className="notice">
          <p className="eyebrow">Important information</p>
          {importantNotice.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        </div>
      </section>

      <section className="final wrap">
        <p className="eyebrow">Ready to have a helping hand?</p>
        <h2>Download Carefinger today.</h2>
        <p>When you can’t be there, we are.</p>
        <StoreButtons />
        <p className="support-line">
          Need assistance? <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        </p>
      </section>
    </>
  )
}
