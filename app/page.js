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
export default function Home() {
  useScrollAnimation()

  const handleCTAClick = () => {
    console.log('Opening Calendly...')
    // Open Calendly in a new window
    const url = 'https://calendly.com/bouramad900/30min'
    window.open(url, '_blank', 'noopener,noreferrer')
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
