'use client'

export default function Founder() {
  return (
    <section className="founder-sec">
      <div className="founder-inner">
        <div className="lbl on-dark" style={{ justifyContent: 'center' }}>Qui est derrière Nexya</div>
        <h2 className="sec-title" style={{ textAlign: 'center' }}>
          Créé par un artisan, pour les artisans
        </h2>

        <div className="founder-grid">
          <div className="founder-left">
            <div className="founder-avatar">
              <div className="founder-avatar-ring"></div>
              <div className="founder-avatar-inner">
                <span className="founder-initials">BD</span>
              </div>
              <div className="founder-avatar-badge">🚀</div>
            </div>

            <div className="founder-identity">
              <div className="founder-name">Bourama D.</div>
              <div className="founder-role">Co-founder & CEO</div>
              <div className="founder-tags">
                <span className="ftag">Ancien plombier</span>
                <span className="ftag">Tech entrepreneur</span>
                <span className="ftag">IDF-based</span>
              </div>
            </div>
          </div>

          <div className="founder-right">
            <div className="founder-quote">
              <div className="quote-mark">"</div>
              <p>
                J'ai perdu des dizaines de chantiers par appels manqués. Pas parce que j'étais mauvais.
                Parce que je gérais tout à la main. C'est là que j'ai eu l'idée : créer la solution que j'aurais voulu avoir.
              </p>
            </div>

            <div className="founder-bio">
              <p>
                Avant Nexya, j'ai <strong>rénové plus de 500 appartements en IDF</strong>.
                J'ai vu le même problème chez tous les artisans : le temps passé à gérer les appels était une vraie hémorragie.
              </p>
              <p style={{ marginTop: '16px' }}>
                Avec Nexya, on a décidé de <strong>libérer ce temps</strong>.
                Aujourd'hui, 400+ artisans ferment plus de chantiers. C'est notre mission.
              </p>
            </div>

            <div className="founder-stats">
              <div className="founder-stat-item">
                <div className="founder-stat-num">500+</div>
                <div className="founder-stat-label">Chantiers rénovés en IDF</div>
              </div>
              <div className="founder-stat-item">
                <div className="founder-stat-num">400+</div>
                <div className="founder-stat-label">Artisans clients Nexya</div>
              </div>
              <div className="founder-stat-item">
                <div className="founder-stat-num">3 ans</div>
                <div className="founder-stat-label">Nexya en développement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
