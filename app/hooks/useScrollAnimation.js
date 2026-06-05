'use client'

import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all elements with rv, rv-l, rv-r classes
    document.querySelectorAll('.rv, .rv-l, .rv-r, .rv-s').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
