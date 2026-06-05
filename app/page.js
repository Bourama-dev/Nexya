'use client'

import { useState, useEffect } from 'react'
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

export default function Home() {
  useScrollAnimation()
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
      setTimeout(() => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: 'https://calendly.com/bouramad900/30min',
            prefilled: {}
          })
          setCalendlyLoaded(true)
        }
      }, 500)
    }
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const handleCTAClick = () => {
    if (window.Calendly?.showPopupWidget) {
      window.Calendly.showPopupWidget()
    } else {
      // Fallback: open Calendly directly
      window.open('https://calendly.com/bouramad900/30min?background_color=07070f&text_color=ffffff', '_blank')
    }
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
    </main>
  )
}
