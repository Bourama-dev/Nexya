'use client'

export default function Hero({ onCTAClick }) {
  return (
    <section className="hero sec-dark">
      <div className="hero-mesh"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="bdot"></span>
          La Méthode HAKILY™ — Agents IA & automatisation pour PME
        </div>

        <h1>
          Zéro appel <span className="grad">manqué</span>
        </h1>

        <p>
          Des agents IA et des automatisations sur mesure qui répondent, qualifient et relancent
          vos prospects 24/7. La Méthode HAKILY™ organise, automatise et fait grandir votre entreprise.
        </p>

        <div className="hero-btns">
          <button className="btn btn-primary" onClick={onCTAClick}>
            RDV diagnostic gratuit
          </button>
          <a href="#method" className="btn btn-secondary">
            Découvrir la Méthode
          </a>
        </div>
      </div>
    </section>
  )
}
