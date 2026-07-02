'use client'

import { useState, useEffect } from 'react'

export default function StickyCTA({ onCTAClick }) {
  const [daysLeft, setDaysLeft] = useState(25)

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft(prev => {
        if (prev <= 1) {
          return 25
        }
        return prev - 1
      })
    }, 86400000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="sticky-cta">
      <div className="sticky-content">
        <div className="countdown">
          <span className="countdown-dot"></span>
          Places limitées ce mois-ci : {daysLeft} jours
        </div>
        <div className="availability">
          Prochains RDV disponibles : demain, après-demain
        </div>
      </div>

      <button
        className="btn btn-primary"
        onClick={onCTAClick}
        style={{
          background: 'var(--vl)',
          marginBottom: 0,
          whiteSpace: 'nowrap'
        }}
      >
        Réserver maintenant
      </button>
    </div>
  )
}
