import { useEffect, useRef, useState } from 'react'
import { PARTNER_LABELS, prefersReducedMotion } from '../data.js'

const Arrow = ({ back }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d={back ? 'M19 12H5M11 6l-6 6 6 6' : 'M5 12h14M13 6l6 6-6 6'} />
  </svg>
)

function WalletVisual() {
  return (
    <svg className="fv" viewBox="0 0 300 340" role="img" aria-label="AI Wallet app preview">
      <rect x="85" y="8" width="130" height="324" rx="26" fill="#0A0F10" stroke="#2DE2C4" strokeOpacity=".7" strokeWidth="2" />
      <rect x="127" y="17" width="46" height="6" rx="3" fill="#12181A" />
      <text x="100" y="52" fill="#8FA3A0" fontSize="9" fontFamily="Manrope">Portfolio overview</text>
      <g transform="translate(150 118) rotate(-90)" fill="none" strokeWidth="12">
        <circle r="38" stroke="#12181A" />
        <circle r="38" stroke="#2DE2C4" strokeDasharray="105 240" />
        <circle r="38" stroke="#7C4DFF" strokeDasharray="58 240" strokeDashoffset="-109" />
        <circle r="38" stroke="#0F4A3A" strokeDasharray="38 240" strokeDashoffset="-171" />
      </g>
      <text x="150" y="122" textAnchor="middle" fill="#F2F1EC" fontSize="10" fontFamily="Sora">Allocation</text>
      <path className="dr" d="M100 235 L120 222 L140 228 L165 205 L185 210 L205 188" fill="none" stroke="#2DE2C4" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="100" y="256" width="100" height="24" rx="8" fill="#12181A" stroke="#7C4DFF" strokeOpacity=".6" />
      <text x="150" y="272" textAnchor="middle" fill="#F2F1EC" fontSize="9" fontFamily="Manrope">Security alert</text>
      <rect x="100" y="288" width="100" height="24" rx="8" fill="#12181A" stroke="#2DE2C4" strokeOpacity=".4" />
      <text x="150" y="304" textAnchor="middle" fill="#8FA3A0" fontSize="9" fontFamily="Manrope">Wallet health</text>
    </svg>
  )
}

function PayVisual() {
  return (
    <svg className="fv" viewBox="0 0 360 250" role="img" aria-label="PicoPine Pay card">
      <defs>
        <linearGradient id="cd" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1b2326" />
          <stop offset="1" stopColor="#05070A" />
        </linearGradient>
      </defs>
      <g transform="rotate(-6 180 125)">
        <rect x="25" y="30" width="310" height="190" rx="20" fill="url(#cd)" stroke="#2DE2C4" strokeOpacity=".6" strokeWidth="1.5" />
        <path d="M160 40 L220 120 L300 90 M200 210 L250 150 L330 170 M120 60 L180 140 L240 200" stroke="#2DE2C4" strokeOpacity=".25" fill="none" />
        <circle cx="220" cy="120" r="3" fill="#2DE2C4" />
        <circle cx="250" cy="150" r="3" fill="#7C4DFF" />
        <rect x="52" y="86" width="44" height="34" rx="7" fill="#c9c2a6" fillOpacity=".85" />
        <path d="M52 103h44M74 86v34" stroke="#05070A" strokeOpacity=".4" />
        <text x="52" y="62" fill="#F2F1EC" fontSize="17" fontWeight="700" fontFamily="Sora">PicoPine</text>
        <text x="52" y="186" fill="#F2F1EC" fontSize="15" letterSpacing="3" fontFamily="Manrope">•••• •••• •••• ••••</text>
        <text x="52" y="206" fill="#8FA3A0" fontSize="10" fontFamily="Manrope">PicoPine Pay</text>
        <g fill="none" stroke="#2DE2C4" strokeWidth="2" strokeLinecap="round">
          <path d="M290 60q8 8 0 16" />
          <path d="M299 55q13 13 0 26" />
        </g>
      </g>
    </svg>
  )
}

function AtlasVisual() {
  return (
    <svg className="fv" viewBox="0 0 360 320" role="img" aria-label="Atlas AI globe">
      <g fill="none" stroke="#2DE2C4" strokeOpacity=".5">
        <circle cx="180" cy="160" r="100" fill="#0F4A3A" fillOpacity=".35" />
        <ellipse cx="180" cy="160" rx="100" ry="34" />
        <ellipse cx="180" cy="160" rx="34" ry="100">
          <animate attributeName="rx" values="34;90;34" dur="9s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="180" cy="160" rx="70" ry="100">
          <animate attributeName="rx" values="70;8;70" dur="9s" repeatCount="indefinite" />
        </ellipse>
      </g>
      <path className="fline" d="M90 120 Q180 20 290 110" fill="none" strokeWidth="1.5" />
      <path className="fline" d="M80 210 Q190 300 300 200" fill="none" stroke="#7C4DFF" strokeWidth="1.5" />
      <g fill="#2DE2C4">
        <circle cx="90" cy="120" r="4" />
        <circle cx="290" cy="110" r="4" />
        <circle cx="300" cy="200" r="4" fill="#7C4DFF" />
        <circle cx="80" cy="210" r="4" fill="#7C4DFF" />
      </g>
      <rect x="14" y="40" width="74" height="40" rx="8" fill="#0A0F10" stroke="#2DE2C4" strokeOpacity=".4" />
      <path d="M22 70l12-8 10 4 14-14 18 6" fill="none" stroke="#2DE2C4" strokeWidth="2" />
      <rect x="272" y="236" width="76" height="44" rx="8" fill="#0A0F10" stroke="#7C4DFF" strokeOpacity=".5" />
      <text x="310" y="262" textAnchor="middle" fill="#F2F1EC" fontSize="10" fontFamily="Manrope">AI insights</text>
    </svg>
  )
}

function PartnerVisual() {
  const n = PARTNER_LABELS.length
  const pts = PARTNER_LABELS.map((t, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2
    return { t, x: 180 + Math.cos(a) * 125, y: 160 + Math.sin(a) * 112 }
  })
  return (
    <svg viewBox="0 0 360 320" role="img" aria-label="Partner network diagram">
      {pts.map((p) => <line key={p.t} className="fline" x1="180" y1="160" x2={p.x} y2={p.y} />)}
      <circle cx="180" cy="160" r="46" fill="#0F4A3A" stroke="#2DE2C4" strokeWidth="2">
        <animate attributeName="r" values="46;50;46" dur="4s" repeatCount="indefinite" />
      </circle>
      <text x="180" y="165" textAnchor="middle" fill="#F2F1EC" fontFamily="Sora" fontWeight="700" fontSize="15">PicoPine</text>
      {pts.map((p) => (
        <g key={p.t}>
          <rect x={p.x - 52} y={p.y - 14} width="104" height="28" rx="14" fill="#0A0F10" stroke="#2DE2C4" strokeOpacity=".5" />
          <text x={p.x} y={p.y + 4} textAnchor="middle" fill="#F2F1EC" fontFamily="Manrope" fontSize="11.5" fontWeight="600">{p.t}</text>
        </g>
      ))}
    </svg>
  )
}

const SLIDES = [
  {
    tag: 'AI Wallet · Phase 2, M6 to M12', title: 'PicoPine AI Wallet',
    text: 'Know your portfolio. An AI-powered portfolio intelligence wallet that helps you understand, manage and protect your assets with clarity.',
    items: ['Portfolio overview and asset allocation', 'Performance tracking and smart summary', 'Security alerts and suspicious activity detection', 'Approval monitor and dormant wallet alerts'],
    Visual: WalletVisual,
  },
  {
    tag: 'Pay · Phase 3, M12 to M21', title: 'PicoPine Pay',
    text: 'A crypto card for everyday payments. Spend digital assets with a seamless, secure and convenient payment experience.',
    items: ['Global spending at supported merchants', 'Secure payments with modern card security', 'Instant top-up from your crypto assets', 'Connect wallet, load balance, pay, track in real time'],
    Visual: PayVisual,
  },
  {
    tag: 'Atlas AI · Phase 4, M21 to M30', title: 'PicoPine Atlas AI',
    text: 'A market intelligence engine that helps you monitor trends, discover opportunities and make smarter decisions.',
    items: ['Trend tracking across market direction and momentum', 'Opportunity discovery and AI insights', 'AI research reports', 'Collect data, analyze trends, generate insights, support decisions'],
    Visual: AtlasVisual,
  },
  {
    tag: 'Partner network · Planned', title: 'Built to connect',
    text: 'Strategic partnerships begin in Phase 1, and Phase 5 opens developer APIs and integrations. That lets PicoPine Pay, AI Wallet and Atlas AI plug into partner AI companies, products and services.',
    items: ['Shared liquidity across a connected ecosystem', 'Intelligent tools for smarter financial growth', 'One unified network with global access'],
    note: 'No partners are announced yet. This is a planned direction.',
    Visual: PartnerVisual,
  },
]

export default function Products() {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const behavior = () => (prefersReducedMotion() ? 'auto' : 'smooth')

  useEffect(() => {
    const el = trackRef.current
    const onScroll = () => {
      const slide = el.children[0]
      setIndex(Math.round(el.scrollLeft / (slide.offsetWidth + 20)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (i) => trackRef.current.scrollTo({ left: trackRef.current.children[i].offsetLeft, behavior: behavior() })
  const by = (dir) => trackRef.current.scrollBy({ left: dir * trackRef.current.clientWidth, behavior: behavior() })
  const arrowCls = 'grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-ln bg-transparent text-tx transition-all hover:border-ac hover:bg-ac/10'

  return (
    <section id="products" className="sec" style={{ background: 'linear-gradient(#05070A, #0A0F10 50%, #05070A)' }}>
      <div className="wrap">
        <h2 className="h2">Three products. One connected vision.</h2>
        <p className="lede mt-6">A complete Web3 stack from protocol to payments, connected through shared liquidity and intelligent financial tools.</p>

        <div ref={trackRef} className="tr" tabIndex={0} role="region" aria-label="PicoPine products carousel">
          {SLIDES.map(({ tag, title, text, items, note, Visual }) => (
            <article className="sl" key={title}>
              <div>
                <span className="tag">{tag}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul>{items.map((it) => <li key={it}>{it}</li>)}</ul>
                {note && <p className="mt-4 text-[.85rem]">{note}</p>}
              </div>
              <div className="vz"><Visual /></div>
            </article>
          ))}
        </div>

        <div className="mt-[26px] flex items-center gap-3">
          <button className={arrowCls} aria-label="Previous product" onClick={() => by(-1)}><Arrow back /></button>
          <button className={arrowCls} aria-label="Next product" onClick={() => by(1)}><Arrow /></button>
          <div className="dts ml-2.5 flex gap-2">
            {SLIDES.map((s, i) => (
              <button key={s.title} className={i === index ? 'on' : ''} aria-label={`Go to product ${i + 1}`} onClick={() => goTo(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
