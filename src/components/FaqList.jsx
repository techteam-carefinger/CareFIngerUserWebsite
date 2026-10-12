import { useState } from 'react'
import { faqs } from '../content.js'

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-list">
      {faqs.map((item, index) => {
        const open = openIndex === index
        return (
          <article key={item.q} className={open ? 'faq-item open' : 'faq-item'}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                {item.q}
                <span aria-hidden="true">{open ? '–' : '+'}</span>
              </button>
            </h3>
            {open ? <p>{item.a}</p> : null}
          </article>
        )
      })}
    </div>
  )
}
