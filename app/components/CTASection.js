'use client'

export default function CTASection({ onCTAClick }) {
  return (
    <section className="cta-sec">
      <h2>Prêt à fermer 40% plus de chantiers ?</h2>
      <p>
        30 minutes avec un expert. Zéro engagement. Un diagnostic personnalisé + estimation ROI.
      </p>
      <button className="cta-btn" onClick={onCTAClick}>
        RDV diagnostic gratuit
        <span className="arr">→</span>
      </button>
      <p className="cta-note">Prochains créneaux : demain matin, après-demain après-midi</p>
    </section>
  )
}
