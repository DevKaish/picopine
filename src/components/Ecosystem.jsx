import { useState } from 'react'
import { NODES } from '../data.js'

// precompute node positions on a circle
const POS = NODES.map((_, i) => {
  const a = (i / 8) * Math.PI * 2 - Math.PI / 2
  return { x: 280 + Math.cos(a) * 215, y: 280 + Math.sin(a) * 215 }
})

function splitLabel(name) {
  const w = name.split(' ')
  const m = w.length > 2 ? Math.ceil(w.length / 2) : 1
  return [w.slice(0, m).join(' '), w.slice(m).join(' ')]
}

export default function Ecosystem() {
  const [active, setActive] = useState(-1)
  const info = active >= 0
    ? { title: NODES[active][0], text: NODES[active][1] }
    : { title: 'PicoPine', text: 'A transparent Web3 finance ecosystem. Hover or focus a node.' }

  return (
    <section id="ecosystem" className="sec" style={{ background: 'radial-gradient(45% 50% at 10% 50%, rgba(124,77,255,.18), transparent), linear-gradient(#05070A, #0A0F10 40%, #05070A)' }}>
      <div className="wrap grid items-center gap-[60px] md:grid-cols-2">
        <div>
          <h2 className="h2">The PicoPine ecosystem</h2>
          <p className="lede mt-6">Select a node to see how each part connects to the protocol.</p>
          <div className="mt-[26px] min-h-[7.5em] border-l-2 border-ac pl-5 text-mu" aria-live="polite">
            <b className="mb-1.5 block font-display text-2xl text-tx">{info.title}</b>
            {info.text}
          </div>
        </div>

        <svg viewBox="0 0 560 560" className="mx-auto block w-full max-w-[560px] overflow-visible" role="group" aria-label="Ecosystem diagram">
          <defs>
            <radialGradient id="cg">
              <stop offset="0" stopColor="#2DE2C4" stopOpacity=".5" />
              <stop offset="1" stopColor="#2DE2C4" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="280" cy="280" r="150" fill="url(#cg)" />
          {POS.map((p, i) => <line key={i} className="fline" x1="280" y1="280" x2={p.x} y2={p.y} />)}
          <circle cx="280" cy="280" r="56" fill="#0F4A3A" stroke="#2DE2C4" strokeWidth="2">
            <animate attributeName="r" values="56;60;56" dur="4s" repeatCount="indefinite" />
          </circle>
          <text x="280" y="287" fill="#F2F1EC" fontFamily="Sora" fontWeight="700" fontSize="19" textAnchor="middle">PicoPine</text>
          {NODES.map(([name], i) => {
            const [l1, l2] = splitLabel(name)
            const { x, y } = POS[i]
            return (
              <g
                key={name} className={`nd ${i % 2 ? 'pv' : ''} ${active === i ? 'a' : ''}`} tabIndex={0} role="button" aria-label={name}
                onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive(i)}
              >
                <circle cx={x} cy={y} />
                <text x={x} y={y - (l2 ? 2 : -4)}>{l1}</text>
                {l2 && <text x={x} y={y + 14}>{l2}</text>}
              </g>
            )
          })}
        </svg>
      </div>
    </section>
  )
}
