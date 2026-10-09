import { NAV } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-ln pb-[60px] pt-[50px] text-[.92rem] text-mu">
      <div className="wrap grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <b className="font-display text-[1.1rem] font-bold text-tx">PicoPine</b>
          <p className="mt-3 max-w-[60ch] text-[.88rem]">
            A transparent Web3 finance ecosystem built on zero supply, smart contract logic and community-driven value growth.
          </p>
        </div>
        <div className="grid content-start gap-1.5">
          {NAV.map((l) => <a key={l.id} className="hover:text-ac" href={`#${l.id}`}>{l.label}</a>)}
        </div>
        <div className="grid content-start gap-1.5">
          <a className="hover:text-ac" href="#">Privacy Policy</a>
          <a className="hover:text-ac" href="#">Terms &amp; Conditions</a>
          <span>Telegram @picopineprotocol</span>
          <span>info@picopineprotocol.io</span>
        </div>
        <p className="border-t border-ln pt-6 text-[.82rem] md:col-span-3">
          Risk and disclosure: digital assets are volatile. Percentages shown are protocol parameters ("up to"), subject to protocol rules, limits and participation, and are not promises of return. Nothing here is financial advice. Do your own research and check your local regulations.
        </p>
      </div>
    </footer>
  )
}
