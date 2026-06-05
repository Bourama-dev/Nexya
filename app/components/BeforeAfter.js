'use client'

const beforeData = [
  { label: 'Prise d\'appels', before: 'Manuelle sur le terrain', after: 'Automatisée 24/7' },
  { label: 'Suivi prospects', before: 'Carnet papier', after: 'Dashboard en temps réel' },
  { label: 'Relances', before: '3/10 prospects relancés', after: '10/10 prospects relancés' },
  { label: 'Chantiers signés/sem', before: '3 chantiers', after: '5–6 chantiers' }
]

export default function BeforeAfter() {
  return (
    <section className="ba-sec">
      <div className="ba-inner">
        <div className="ba-title-wrap">
          <div className="lbl" style={{ color: 'var(--vl)' }}>Avant vs Après</div>
          <h2 className="ba-title sec-title">Le choc de la transformation</h2>
        </div>

        <div className="ba-grid">
          <div className="ba-col ba-before">
            <div className="ba-col-lbl">❌ Avant Nexya</div>
            {beforeData.map((item, idx) => (
              <div key={idx} className="ba-row">
                <span style={{ fontWeight: 600 }}>{item.label}</span>
              </div>
            ))}
            <div style={{ marginTop: '18px' }}>
              {beforeData.map((item, idx) => (
                <div key={idx} className="ba-result">
                  <span style={{ fontSize: '12px', color: 'rgba(13,11,30,0.7)' }}>
                    {item.before}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="ba-col ba-after">
            <div className="ba-col-lbl">✅ Après Nexya</div>
            {beforeData.map((item, idx) => (
              <div key={idx} className="ba-row">
                <span style={{ fontWeight: 600 }}>{item.label}</span>
              </div>
            ))}
            <div style={{ marginTop: '18px' }}>
              {beforeData.map((item, idx) => (
                <div key={idx} className="ba-result">
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)' }}>
                    {item.after}
                  </span>
                  <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--vl)' }}>
                    ✓
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
