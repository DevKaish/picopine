import { useInView, useCountUp } from '../hooks.js'
import { NUMS } from '../data.js'

function Metric({ n, prefix, suffix, label, rest, start }) {
  const v = useCountUp(n, start)
  return (
    <div>
      <strong className="block font-display text-[clamp(3rem,6vw,5.4rem)] font-extrabold leading-none tracking-[-0.04em] bg-gradient-to-br from-ac to-vl bg-clip-text text-transparent max-md:text-[2.8rem]">
        {prefix}{v}{suffix}
      </strong>
      <span className="mt-3 block text-[.95rem] text-mu">
        <b className="font-semibold text-tx">{label}</b> {rest}
      </span>
    </div>
  )
}

export default function Model() {
  const [laneRef, laneIn] = useInView(0.3)
  const [numRef, numIn] = useInView(0.3)
  return (
    <section id="model" className="sec">
      <div className="wrap">
        <h2 className="h2">Every deposit mints. Every sell burns.</h2>

        <div ref={laneRef} className={`mt-[60px] ${laneIn ? 'in' : ''}`}>
          <div className="lane">
            <h3 className="mb-1.5 text-[1.9rem]">Mint side</h3>
            <small className="text-[.95rem] text-mu">Every deposit drives minting and liquidity.</small>
            <div className="bar"><b>80% token minting</b><b>20%</b></div>
            <small className="text-[.95rem] text-mu">20% price gap: creates upward price support.</small>
            <div className="dots" />
          </div>
          <div className="lane">
            <h3 className="mb-1.5 text-[1.9rem]">Sell side</h3>
            <small className="text-[.95rem] text-mu">Every sell drives burn and stability.</small>
            <div className="dots r" />
            <p className="m-0 text-tx">100% of tokens burn from the contract, reducing supply. 15% liquidity is added for the last user sell.</p>
          </div>
        </div>

        <div ref={numRef} className="nums mt-[60px] grid grid-cols-4 border-t border-ln max-md:grid-cols-2">
          {NUMS.map((m) => <Metric key={m.label} {...m} start={numIn} />)}
        </div>
      </div>
    </section>
  )
}
