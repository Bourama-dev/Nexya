'use client'

const testimonials = [
  {
    id: 1,
    name: 'Marc Leclerc',
    role: 'Plombier',
    location: 'Paris (75)',
    text: 'HAKILY m\'a fait gagner 5 heures par semaine en automatisant la prise de RDV. Résultat : 12 chantiers supplémentaires par mois.',
    result: '+12 chantiers/mois',
    avatar: 'ML',
    rating: 5
  },
  {
    id: 2,
    name: 'Sophie Martin',
    role: 'Électricienne',
    location: 'Boulogne-Billancourt (92)',
    text: 'Les prospects relancés automatiquement = +38% de taux de conversion. Je gère maintenant 2x plus de chantiers.',
    result: '+38% conversion',
    avatar: 'SM',
    rating: 5
  },
  {
    id: 3,
    name: 'Jean Dupont',
    role: 'Maçon',
    location: 'Saint-Denis (93)',
    text: 'Plus besoin de gérer un agenda papier. Avec HAKILY, mes appels sont traités 24/7, même quand j\'suis en chantier.',
    result: '+25h/semaine gagnées',
    avatar: 'JD',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials sec-dark">
      <p className="eyebrow">Ils ont adopté la Méthode HAKILY</p>
      <h2 className="section-title">Ils ont fermé plus de chantiers</h2>

      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            <div className="testimonial-rating">
              {'★'.repeat(t.rating)}
            </div>
            <p className="testimonial-text">{t.text}</p>
            <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border-dark)' }}>
              <span style={{ color: 'var(--vl)', fontWeight: '600', fontSize: '13px' }}>
                {t.result}
              </span>
            </div>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.avatar}</div>
              <div className="testimonial-info">
                <h3>{t.name}</h3>
                <p>{t.role} • {t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
