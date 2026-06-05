'use client'

import { useState } from 'react'

export default function ROICalculator() {
  const [callsPerWeek, setCallsPerWeek] = useState(15)
  const [avgProjectValue, setAvgProjectValue] = useState(8000)

  const conversionRate = 0.45
  const automationGain = 0.35
  const missedCallRate = 0.15 // 15% des appels sont manqués

  // Calcul réaliste:
  // 1. Appels reçus par semaine
  // 2. Appels manqués (15%)
  // 3. Chantiers perdus = appels manqués * taux de conversion
  const callsMissedPerWeek = callsPerWeek * missedCallRate
  const dealsLostPerWeek = callsMissedPerWeek * conversionRate
  const dealsLostPerYear = dealsLostPerWeek * 52
  const yearlyLoss = dealsLostPerYear * avgProjectValue
  const monthlyLoss = Math.floor(yearlyLoss / 12)

  return (
    <section id="roi" className="roi-section">
      <h2 className="section-title rv" style={{animationDelay:'0.1s'}}>Combien perdez-vous chaque mois ?</h2>

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
              className="calculator-range"
            />
            <div style={{ marginTop: '12px', textAlign: 'right', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: '600' }}>
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
              className="calculator-number"
            />
          </div>

          <div className="calculator-result">
            <div className="result-label">Manque à gagner mensuel (appels manqués)</div>
            <div className="result-value">
              {monthlyLoss.toLocaleString('fr-FR')} €
            </div>
            <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(108,92,231,0.1)', borderRadius: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
              <strong style={{color: 'var(--vl)'}}>{callsMissedPerWeek.toFixed(1)}</strong> appels manqués/semaine = <strong style={{color: 'var(--vl)'}}>{dealsLostPerWeek.toFixed(2)}</strong> chantiers perdus/semaine = <strong style={{color: 'var(--vl)'}}>{Math.floor(yearlyLoss).toLocaleString('fr-FR')} €</strong> par an
            </div>
          </div>

          <div style={{ marginTop: '32px', padding: '20px', background: 'rgba(162,155,254,0.1)', border: '1px solid var(--vl)', borderRadius: '12px', textAlign: 'center', animation: 'slideInUp 0.5s cubic-bezier(0.22,1,0.36,1) 0.2s both' }}>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>
              💰 Avec Nexya, vous retrouveriez
            </div>
            <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--vl)', fontFamily: "'Syne', sans-serif" }}>
              +{Math.floor(yearlyLoss * automationGain).toLocaleString('fr-FR')} €/an
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .calculator-range {
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: linear-gradient(to right, #6C5CE7, #A29BFE);
          outline: none;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
          transition: all 0.2s;
        }

        .calculator-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fff, #A29BFE);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(108, 92, 231, 0.4);
          transition: all 0.2s;
        }

        .calculator-range::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 8px 20px rgba(108, 92, 231, 0.6);
        }

        .calculator-range::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fff, #A29BFE);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 12px rgba(108, 92, 231, 0.4);
          transition: all 0.2s;
        }

        .calculator-range::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 8px 20px rgba(108, 92, 231, 0.6);
        }

        .calculator-number {
          width: 100%;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1.5px solid rgba(162, 155, 254, 0.3);
          border-radius: 10px;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .calculator-number:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.1);
          border-color: #A29BFE;
          box-shadow: 0 0 20px rgba(108, 92, 231, 0.3);
          transform: scale(1.02);
        }
      `}</style>
    </section>
  )
}
