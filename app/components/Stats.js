'use client'

const stats = [
  { value: '+127%', label: "de chiffre d'affaires en 6 mois" },
  { value: '+152%', label: "d'appels entrants traités en 6 mois" },
  { value: '+67%', label: 'de taux de conversion en 6 mois' },
  { value: '+148%', label: 'de clients gagnés en 6 mois' }
]

export default function Stats() {
  return (
    <section className="stats-section">
      <p className="eyebrow">Des résultats concrets, une croissance continue</p>
      <h2 className="section-title">L'impact de la Méthode HAKILY sur votre performance</h2>

      <div className="stats-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <p className="stats-caption">
        Données moyennes observées chez nos clients TPE/PME entre 3 et 6 mois après la mise en place.
      </p>
    </section>
  )
}
