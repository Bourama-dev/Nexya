'use client'

import { useState } from 'react'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Problem from './components/Problem'
import Solution from './components/Solution'
import BeforeAfter from './components/BeforeAfter'
import Comparison from './components/Comparison'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import ROICalculator from './components/ROICalculator'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Founder from './components/Founder'
import StickyCTA from './components/StickyCTA'
import Footer from './components/Footer'
import CalendlyModal from './components/CalendlyModal'

export default function Home() {
  useScrollAnimation()
  const [showCalendly, setShowCalendly] = useState(false)

  const handleCTAClick = () => {
    console.log('CTA clicked, opening Calendly modal')
    setShowCalendly(true)
  }

  const handleCloseCalendly = () => {
    console.log('Calendly modal closed')
    setShowCalendly(false)
  }

  return (
    <main>
      <Navigation onCTAClick={handleCTAClick} />
      <Hero onCTAClick={handleCTAClick} />
      <Stats />
      <Problem />
      <Solution />
      <BeforeAfter />
      <Comparison />
      <Process />
      <Testimonials />
      <ROICalculator />
      <FAQ />
      <CTASection onCTAClick={handleCTAClick} />
      <Founder />
      <StickyCTA onCTAClick={handleCTAClick} />
      <Footer />
      <CalendlyModal isOpen={showCalendly} onClose={handleCloseCalendly} />
    </main>
  )
}
