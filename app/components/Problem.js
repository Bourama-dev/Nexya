'use client'

const problems = [
  {
    emoji: '📞',
    title: 'Appels manqués',
    desc: 'Vous en perdez 1 sur 7 en moyenne. Zéro callback = zéro affaire.'
  },
  {
    emoji: '🔄',
    title: 'Pas de suivi auto',
    desc: 'Relancer 30 prospects à la main = 2h par semaine. Coûteux et oublié.'
  },
  {
    emoji: '⏱️',
    title: 'Admin chronophage',
    desc: 'Agenda papier, emails, SMS… le chaos. Perte de leads garantie.'
  },
  {
    emoji: '💼',
    title: 'Taux de fermeture bas',
    desc: '3 chantiers signés au lieu de 5. Argent laissé sur la table.'
  }
]

export default function Problem() {
  return (
    <section className="problem-sec" id="probleme">
      <div className="problem-inner">
        <div className="lbl on-light rv">Le problème</div>
        <h2 className="sec-title">Vous perdez des chantiers tous les jours</h2>
        <p className="sec-sub light">
          Les artisans BTP passent 3x plus de temps à manager les appels qu'à générer du CA.
          Résultat : leads perdus, agenda en chaos, revenus qui s'envolent.
        </p>

        <div className="prob-grid">
          {problems.map((prob, idx) => (
            <div key={idx} className="prob-card rv" data-d={idx + 1}>
              <span className="prob-emoji">{prob.emoji}</span>
              <h3>{prob.title}</h3>
              <p>{prob.desc}</p>
              <span className="prob-pill">fréquent</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
