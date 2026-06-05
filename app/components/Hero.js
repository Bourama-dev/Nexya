'use client'

export default function Hero({ onCTAClick }) {
  return (
    <section className="hero sec-dark">
      <div className="hero-mesh"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="bdot"></span>
          Plus de 400+ artisans BTP en France
        </div>

        <h1>
          Zéro appel <span className="grad">manqué</span>
        </h1>

        <p>
          Automatisez votre prise de RDV, relancez automatiquement les prospects, et
          fermez 40% plus de chantiers. Essayez gratuitement.
        </p>

        <div className="hero-btns">
          <button className="btn btn-primary" onClick={onCTAClick}>
            RDV diagnostic gratuit
          </button>
          <a href="https://calendly.com" className="btn btn-secondary">
            Voir la démo
          </a>
        </div>
      </div>
    </section>
  )
}
