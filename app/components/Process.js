'use client'

const processSteps = [
  {
    num: 1,
    tag: 'JOUR 1',
    title: 'Diagnostic gratuit',
    desc: 'Appel téléphonique avec un expert. On mesure vos appels, vos pertes, votre potentiel ROI.'
  },
  {
    num: 2,
    tag: 'JOUR 2–3',
    title: 'Setup & intégration',
    desc: 'Branchement sur votre ligne. Configuration des messages auto. Tout prêt en moins d\'1h.'
  },
  {
    num: 3,
    tag: 'JOUR 4+',
    title: 'Résultats visibles',
    desc: 'Les appels entrants sont capturés. Les relances partent auto. Premiers chantiers bonus en 2 semaines.'
  }
]

export default function Process() {
  return (
    <section className="process-sec">
      <div className="process-inner">
        <div className="lbl">Comment ça marche</div>
        <h2 className="sec-title">Du diagnostic à la fermeture : 3 jours max</h2>

        <div className="proc-steps">
          {processSteps.map((step) => (
            <div key={step.num} className="proc-card">
              <div className="proc-n">{step.num}</div>
              <div className="proc-tag">{step.tag}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
