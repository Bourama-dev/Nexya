'use client'

const steps = [
  {
    letter: 'H',
    title: 'Harmoniser',
    tagline: "Comprendre avant d'automatiser.",
    text: 'Nous analysons vos processus, vos outils et vos objectifs pour identifier les opportunités à fort impact.',
    items: ['Audit IA & processus', 'Cartographie des flux', 'Recommandations priorisées'],
    accent: 'var(--purple)'
  },
  {
    letter: 'A',
    title: 'Automatiser',
    tagline: 'Déployer des agents IA et des workflows qui travaillent pour vous.',
    text: "Nous concevons et déployons des agents IA et des scénarios d'automatisation adaptés à vos besoins.",
    items: ['Agents vocaux & chat', 'Workflows sur mesure', 'Automatisations intelligentes'],
    accent: 'var(--v)'
  },
  {
    letter: 'K',
    title: 'Knowledge',
    tagline: 'Nourrir les agents avec vos connaissances.',
    text: 'Nous structurons et centralisons vos informations pour des agents IA plus fiables et pertinents.',
    items: ['Base de connaissances', 'FAQ & documents', 'Données internes connectées'],
    accent: 'var(--vl)'
  },
  {
    letter: 'I',
    title: 'Intégrer',
    tagline: 'Connecter vos outils pour un écosystème fluide.',
    text: 'Nous connectons HAKILY à vos outils existants pour un flux d\'informations sans friction.',
    items: ['CRM, agenda, téléphone', 'Google Workspace, M365', 'ERP, messageries, etc.'],
    accent: 'var(--green)'
  },
  {
    letter: 'L',
    title: 'Libérer',
    tagline: 'Éliminer les tâches répétitives.',
    text: 'Vos équipes se concentrent sur ce qui crée de la valeur, fini le temps perdu sur l\'administratif.',
    items: ["Moins d'administratif", "Moins d'appels manqués", 'Plus de productivité'],
    accent: 'var(--orange)'
  },
  {
    letter: 'Y',
    title: 'Yield',
    tagline: 'Mesurer, analyser et optimiser en continu.',
    text: 'Nous suivons les performances et générons des rapports clairs pour garantir un ROI concret et croissant.',
    items: ['Suivi des KPI', 'Reporting personnalisé', 'Optimisation continue'],
    accent: 'var(--pink)'
  }
]

export default function Method() {
  return (
    <section id="method" className="method-section">
      <p className="eyebrow">La Méthode HAKILY™</p>
      <h2 className="section-title">6 étapes. Une mission : votre croissance.</h2>
      <p className="method-sub">
        Notre offre ne s'articule pas autour d'un simple service : nous combinons IA, automatisation
        et intégration pour libérer votre temps et accélérer vos résultats.
      </p>

      <div className="method-grid">
        {steps.map((s) => (
          <div key={s.letter} className="method-card" style={{ '--accent': s.accent }}>
            <div className="method-letter">{s.letter}</div>
            <h3>{s.title}</h3>
            <p className="method-tagline">{s.tagline}</p>
            <p>{s.text}</p>
            <ul className="method-list">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="method-promise">
        <p>
          <strong>Notre promesse :</strong> des agents IA et des automatisations sur mesure qui
          génèrent des résultats mesurables.
        </p>
        <span className="method-guarantee">Garantie 15 jours satisfait ou remboursé</span>
      </div>
    </section>
  )
}
