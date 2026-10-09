import Logo from './Logo.jsx'

export default function FinalCta() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-[170px] text-center"
      style={{ background: 'radial-gradient(40% 50% at 30% 60%, rgba(124,77,255,.3), transparent), radial-gradient(50% 60% at 60% 55%, rgba(15,74,58,.6), transparent 70%)' }}
    >
      <div className="wrap">
        <div className="ring"><Logo size={56} /></div>
        <h2 className="mx-auto mb-9 mt-[30px] max-w-[12ch] text-[clamp(2.6rem,7vw,6rem)] font-bold">Enter the PicoPine ecosystem</h2>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a className="btn btn-p" href="#home">Explore PicoPine</a>
          <a className="btn btn-g" href="#model">Learn More</a>
        </div>
      </div>
    </section>
  )
}
