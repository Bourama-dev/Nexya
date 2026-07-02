'use client'

const rows = [
  {
    sans: 'Appels manqués pendant les interventions.',
    avec: 'Tous les appels sont pris en charge 24h/24 et 7j/7.'
  },
  {
    sans: 'Des prospects contactent la concurrence.',
    avec: 'Chaque appel est accueilli immédiatement avec un discours professionnel.'
  },
  {
    sans: 'Temps perdu à rappeler les clients.',
    avec: 'Les demandes sont qualifiées automatiquement et transmises au bon moment.'
  },
  {
    sans: 'Interruptions constantes pendant le travail.',
    avec: 'Vous restez concentré sur votre activité, sans être dérangé.'
  },
  {
    sans: "Risque de perdre du chiffre d'affaires.",
    avec: "Plus d'opportunités converties et augmentation du chiffre d'affaires."
  },
  {
    sans: "Image d'une entreprise difficile à joindre.",
    avec: 'Une entreprise disponible, réactive et moderne.'
  },
  {
    sans: 'Gestion manuelle des appels et des informations.',
    avec: 'Automatisation de la gestion des appels et centralisation des données clients.'
  }
]

export default function Comparison() {
  return (
    <section className="compare-section">
      <p className="eyebrow">Sans HAKILY vs Avec HAKILY</p>
      <h2 className="section-title">La différence qui fait gagner du temps, des clients et du chiffre d'affaires</h2>

      <div className="compare-grid">
        <div className="compare-col sans">
          <div className="compare-col-header">✕ Sans HAKILY</div>
          {rows.map((r, i) => (
            <div className="compare-row" key={i}>
              <span className="compare-icon">✕</span>
              <span>{r.sans}</span>
            </div>
          ))}
        </div>

        <div className="compare-col avec">
          <div className="compare-col-header">✓ Avec HAKILY</div>
          {rows.map((r, i) => (
            <div className="compare-row" key={i}>
              <span className="compare-icon">✓</span>
              <span>{r.avec}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="compare-bottom">
        <span className="compare-pill">Gain de temps</span>
        <span className="compare-pill">Plus de clients</span>
        <span className="compare-pill">Plus de chiffre d'affaires</span>
        <span className="compare-pill">Meilleure expérience client</span>
      </div>
    </section>
  )
}
