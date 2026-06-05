'use client'

import { useState } from 'react'

export default function ROICalculator() {
  const [callsPerWeek, setCallsPerWeek] = useState(15)
  const [avgProjectValue, setAvgProjectValue] = useState(8000)

  const conversionRate = 0.45
  const automationGain = 0.35

  const missedCalls = Math.floor(callsPerWeek * 0.15)
  const missedDeals = Math.floor(missedCalls * conversionRate)
  const yearlyLoss = missedDeals * 52 * avgProjectValue
  const monthlyLoss = Math.floor(yearlyLoss / 12)

  return (
    <section id="roi" className="roi-section">
      <h2 className="section-title">Combien perdez-vous chaque mois ?</h2>

      <div className="roi-container">
        <div className="calculator">
          <div className="calculator-input">
            <label className="calculator-label">
              Appels reçus par semaine
            </label>
            <input
              type="range"
              min="5"
              max="50"
              value={callsPerWeek}
              onChange={(e) => setCallsPerWeek(Number(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '4px',
                background: 'linear-gradient(to right, var(--v), var(--vl))',
                outline: 'none',
                cursor: 'pointer'
              }}
            />
            <div style={{ marginTop: '8px', textAlign: 'right', color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
              {callsPerWeek} appels/semaine
            </div>
          </div>

          <div className="calculator-input">
            <label className="calculator-label">
              Valeur moyenne d'un chantier (€)
            </label>
            <input
              type="number"
              min="1000"
              max="50000"
              step="500"
              value={avgProjectValue}
              onChange={(e) => setAvgProjectValue(Number(e.target.value))}
            />
          </div>

          <div className="calculator-result">
            <div className="result-label">Manque à gagner mensuel (appels manqués)</div>
            <div className="result-value">
              {monthlyLoss.toLocaleString('fr-FR')} €
            </div>
            <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(108,92,231,0.1)', borderRadius: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.5' }}>
              <strong>{callsPerWeek * 0.15}</strong> appels manqués/semaine = <strong>{missedDeals}</strong> chantiers perdus/semaine = <strong>{Math.floor(yearlyLoss).toLocaleString('fr-FR')} €</strong> par an
            </div>
          </div>

          <div style={{ marginTop: '32px', padding: '20px', background: 'rgba(162,155,254,0.1)', border: '1px solid var(--vl)', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginBottom: '8px' }}>
              Avec Nexya, vous retrouveriez
            </div>
            <div style={{ fontSize: '28px', fontWeight: '700', color: 'var(--vl)', fontFamily: "'Syne', sans-serif" }}>
              {Math.floor(yearlyLoss * automationGain).toLocaleString('fr-FR')} €/an
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
