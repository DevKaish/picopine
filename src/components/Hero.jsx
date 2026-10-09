import { useRef } from 'react'
import PineCanvas from './PineCanvas.jsx'

const CHIPS = ['Zero Supply', 'Smart Contract', 'Ownership Renounced', 'Anti-Whale Protection', 'BNB Smart Chain']

export default function Hero() {
  const contentRef = useRef(null)
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-[70px] pt-[110px] max-md:items-end max-md:pb-9 max-md:pt-[84px]"
      style={{
        background:
          'radial-gradient(60% 70% at 70% 60%, rgba(15,74,58,.55), transparent 70%), radial-gradient(45% 45% at 88% 12%, rgba(124,77,255,.34), transparent), radial-gradient(45% 50% at 12% 90%, rgba(124,77,255,.22), transparent)',
      }}
    >
      <PineCanvas contentRef={contentRef} />

      <div ref={contentRef} className="wrap relative z-10 w-full">
        <h1 className="max-w-[9ch] text-[clamp(3rem,7vw,7rem)] font-extrabold max-md:max-w-none max-md:text-[clamp(2.6rem,13vw,3.6rem)]">
          <span className="ld block max-md:mr-[.18em] max-md:inline-block" style={{ animationDelay: '1.6s' }}>Mint.</span>
          <span className="ld block bg-gradient-to-r from-ac to-vi bg-clip-text text-transparent max-md:mr-[.18em] max-md:inline-block" style={{ animationDelay: '1.8s' }}>Burn.</span>
          <span
            className="ld block text-transparent max-md:inline-block"
            style={{ animationDelay: '2s', WebkitTextStroke: '1.5px #A78BFA' }}
          >Grow.</span>
        </h1>
        <p className="ld mb-9 mt-7 max-w-[46ch] text-[1.2rem] text-[#b9c6c3] max-md:mb-[22px] max-md:mt-4 max-md:text-[1.02rem]" style={{ animationDelay: '2.4s' }}>
          A transparent Web3 finance ecosystem built on zero supply, smart contract logic and community-driven value growth.
        </p>
        <div className="ld flex flex-wrap gap-3.5 max-md:[&>a]:flex-auto max-md:[&>a]:justify-center max-md:[&>a]:px-[18px] max-md:[&>a]:py-3.5" style={{ animationDelay: '2.8s' }}>
          <a className="btn btn-p" href="#ecosystem">
            Explore PicoPine
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <a className="btn btn-g" href="#model">Discover the Ecosystem</a>
        </div>
      </div>

      <div className="ld absolute bottom-[9vh] right-[4vw] z-10 grid gap-2.5 max-md:hidden" style={{ animationDelay: '3.2s' }} aria-hidden="true">
        {CHIPS.map((c) => (
          <span key={c} className="chip rounded-full border border-ln bg-b2/70 px-4 py-[9px] text-[.85rem]">{c}</span>
        ))}
      </div>
    </section>
  )
}
