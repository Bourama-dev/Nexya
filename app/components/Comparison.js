'use client'

const comparisonData = [
  { task: 'Répondre aux appels 24/7', nexya: true, outros: false },
  { task: 'Dashboard temps réel', nexya: true, outros: false },
  { task: 'Relances automatiques', nexya: true, outros: false },
  { task: 'Classification intelligente', nexya: true, outros: false },
  { task: 'Support dédié', nexya: true, outros: false },
  { task: 'Integrations (CRM, SMS, etc)', nexya: true, outros: false },
  { task: 'Setup < 1h', nexya: true, outros: false }
]

export default function Comparison() {
  return (
    <section className="table-sec">
      <div className="table-inner">
        <div className="lbl on-light centered">Vs. la concurrence</div>
        <h2 className="sec-title">Nexya > tout le reste</h2>
        <p className="sec-sub light">Pas de répondeur basique. Pas d'app compliquée. Juste Nexya.</p>

        <table className="comp-table">
          <thead>
            <tr className="comp-head">
              <span style={{ gridColumn: '1' }}>Fonctionnalité</span>
              <span style={{ gridColumn: '2' }}>Nexya</span>
              <span style={{ gridColumn: '3' }}>Autres répondeurs</span>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((item, idx) => (
              <tr key={idx} className="comp-row">
                <span className="comp-task">{item.task}</span>
                <span className="comp-av">{item.nexya && '✓'}</span>
                <span className="comp-sans">{item.outros && '✓'}</span>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
