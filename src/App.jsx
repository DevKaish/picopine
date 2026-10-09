import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Technology from './components/Technology.jsx'
import Model from './components/Model.jsx'
import Ecosystem from './components/Ecosystem.jsx'
import Products from './components/Products.jsx'
import Vision from './components/Vision.jsx'
import Faq from './components/Faq.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a href="#main" className="absolute -top-16 left-3 z-[99] rounded-lg bg-ac px-3.5 py-2 text-black focus:top-3">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Technology />
        <Model />
        <Ecosystem />
        <Products />
        <Vision />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
