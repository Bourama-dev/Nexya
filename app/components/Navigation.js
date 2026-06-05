'use client'

import { useState, useEffect } from 'react'

export default function Navigation({ onCTAClick }) {
  const [isLightNav, setIsLightNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsLightNav(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={isLightNav ? 'light-nav' : ''}>
      <a href="#" className="logo">
        <span className="logo-name">Ne<em>xy</em>a</span>
      </a>

      <div className="nav-links">
        <a href="#testimonials">Témoignages</a>
        <a href="#roi">ROI</a>
        <a href="#faq">FAQ</a>
        <a href="tel:0766125841" className="nav-phone">07 66 12 58 41</a>
      </div>

      <button className="nav-cta" onClick={onCTAClick}>
        RDV gratuit
      </button>
    </nav>
  )
}
