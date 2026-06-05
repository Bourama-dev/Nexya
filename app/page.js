'use client'

import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import ROICalculator from './components/ROICalculator'
import FAQ from './components/FAQ'
import StickyCTA from './components/StickyCTA'
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    window.Calendly?.initPopupWidget({
      url: 'https://calendly.com/bouramad900/30min'
    })
  }, [])

  const handleCTAClick = () => {
    window.Calendly?.showPopupWidget()
  }

  return (
    <main>
      <Navigation onCTAClick={handleCTAClick} />
      <Hero onCTAClick={handleCTAClick} />
      <Testimonials />
      <ROICalculator />
      <FAQ />
      <StickyCTA onCTAClick={handleCTAClick} />
      <Footer />
    </main>
  )
}
