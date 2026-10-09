export default function Technology() {
  return (
    <section id="technology" className="sec" style={{ background: 'radial-gradient(50% 60% at 88% 50%, rgba(124,77,255,.2), transparent)' }}>
      <div className="wrap grid items-center gap-[60px] md:grid-cols-2">
        <div>
          <h2 className="h2">Fair by design. Automated by contract.</h2>
          <p className="lede mt-[26px]">
            Supply starts at zero and grows only through user-initiated minting. All minting, burning and reward logic runs on-chain, and no admin can mint, pause or change the contract after deployment.
          </p>
          <p className="lede mt-4">
            Capped deposits of $10 to $1,000 help prevent supply shocks and price manipulation. Built on BNB Smart Chain with BEP-20 compatibility, fast transactions and low fees.
          </p>
        </div>
        <svg viewBox="0 0 400 400" role="img" aria-label="Layered technology core">
          <g fill="none" stroke="#2DE2C4" strokeOpacity=".5">
            <circle cx="200" cy="200" r="60" fill="#0F4A3A" fillOpacity=".5" />
            <circle cx="200" cy="200" r="100" strokeDasharray="3 9">
              <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="40s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="200" r="145" stroke="#7C4DFF" strokeDasharray="14 10">
              <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="60s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="200" r="188" />
          </g>
          <g fill="#F2F1EC" fontFamily="Manrope" fontSize="12" textAnchor="middle">
            <text x="200" y="196">Smart</text>
            <text x="200" y="212">Contract</text>
            <text x="200" y="76">Zero Supply Token</text>
            <text x="200" y="38" fill="#2DE2C4">BNB Smart Chain · BEP-20</text>
            <text x="200" y="368" fill="#8FA3A0">Liquidity engine · AI layer</text>
          </g>
        </svg>
      </div>
    </section>
  )
}
