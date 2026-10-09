import { useInView } from '../hooks.js'
import { PHASES } from '../data.js'

export default function Vision() {
  const [ref, seen] = useInView(0.3)
  return (
    <section id="vision" className="sec">
      <div className="wrap">
        <h2 className="h2">One AI-powered Web3 ecosystem</h2>
        <p className="lede mt-6">42 months, five phases: from community, to products, to global Web3 infrastructure.</p>
      </div>
      <div ref={ref} className={`overflow-x-auto pb-[30px] pt-[70px] max-md:pt-10 ${seen ? 'in' : ''}`} style={{ scrollbarColor: '#0F4A3A transparent' }}>
        <div className="rt">
          {PHASES.map(([when, title, text]) => (
            <div className="ph" key={title}>
              <em className="font-display text-[.85rem] font-semibold not-italic text-ac">{when}</em>
              <h3 className="mb-2 mt-1.5 text-[1.25rem] leading-[1.15]">{title}</h3>
              <p className="lede text-[.92rem] leading-normal">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
