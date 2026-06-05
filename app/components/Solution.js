'use client'

const steps = [
  {
    num: 1,
    title: 'Branchez votre téléphone',
    desc: 'Nexya branche en 30 min sur votre ligne téléphonique existante. Aucune app à télécharger.'
  },
  {
    num: 2,
    title: 'Automatisez les appels entrants',
    desc: 'Chaque appel est classé (prospect, client, autre). Un répondeur vocal retient l\'info clé.'
  },
  {
    num: 3,
    title: 'Relancez automatiquement',
    desc: '24/7, les prospects non-joints reçoivent un SMS ou email de relance. Personnalisé.'
  },
  {
    num: 4,
    title: 'Consultez votre dashboard',
    desc: 'Tous les appels, tous les prospects, tout le pipeline en un coup d\'œil. Aucune data perdue.'
  },
  {
    num: 5,
    title: 'Fermez plus de chantiers',
    desc: 'Les relances auto = +35% de fermeture. Vous n\'aviez qu\'à y penser plus tôt.'
  }
]

export default function Solution() {
  return (
    <section className="solution-sec" id="solution">
      <div className="solution-inner">
        <div className="lbl on-dark rv">La solution Nexya</div>
        <h2 className="sec-title">Zéro appel manqué. Zéro prospect oublié. Zéro admin.</h2>

        <div className="sol-grid">
          <div>
            {steps.map((step) => (
              <div key={step.num} className="step-item rv" data-d={step.num > 3 ? 4 : step.num}>
                <div className="snum">{step.num}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rv-r">
            <div className="roi-box">
              <div className="roi-box-lbl">📊 Estimation ROI — Artisan BTP</div>
              <div className="roi-row">
                <span className="rl">Appels / semaine</span>
                <span className="rv">10</span>
              </div>
              <div className="roi-row">
                <span className="rl">Avant : chantiers signés</span>
                <span className="rv">3</span>
              </div>
              <div className="roi-row">
                <span className="rl">Après Nexya : chantiers signés</span>
                <span className="rv">5–6</span>
              </div>
              <div className="roi-row">
                <span className="rl">Valeur moyenne / chantier</span>
                <span className="rv">1 200€</span>
              </div>
              <div className="roi-sep"></div>
              <div className="roi-row">
                <span className="rl">Gain mensuel estimé</span>
                <span className="rv big">+6 000€ / mois</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
