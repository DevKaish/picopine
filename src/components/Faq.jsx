import { useState } from 'react'
import { FAQS } from '../data.js'

export default function Faq() {
  const [open, setOpen] = useState(-1)
  return (
    <section id="faq" className="sec">
      <div className="wrap">
        <h2 className="h2">Questions, answered from the plan</h2>
        <div className="mt-[50px] max-w-[820px]">
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i
            return (
              <div key={q} className={`border-b border-ln ${isOpen ? 'open' : ''}`}>
                <button
                  id={`q${i}`} aria-expanded={isOpen} aria-controls={`a${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer justify-between gap-5 border-0 bg-transparent py-[26px] text-left font-display text-[1.2rem] font-semibold tracking-[-0.02em] text-tx transition-colors hover:text-ac"
                >
                  {q}<i className="pm" />
                </button>
                <div className="fa" id={`a${i}`} role="region" aria-labelledby={`q${i}`}>
                  <p className="lede">{a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
