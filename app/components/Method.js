'use client'

function Icon({ name }) {
  const props = {
    width: 26,
    height: 26,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }
  switch (name) {
    case 'search':
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16" y2="16" />
        </svg>
      )
    case 'zap':
      return (
        <svg {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    case 'book':
      return (
        <svg {...props}>
          <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
          <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
        </svg>
      )
    case 'link':
      return (
        <svg {...props}>
          <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
          <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 15.5 14" />
        </svg>
      )
    case 'trending':
      return (
        <svg {...props}>
          <polyline points="22 6 13.5 15 8.5 10 2 17" />
          <polyline points="16 6 22 6 22 12" />
        </svg>
      )
    default:
      return null
  }
}

const steps = [
  {
    letter: 'H',
    icon: 'search',
    title: 'Harmoniser',
    tagline: "Comprendre avant d'automatiser.",
    text: 'Nous analysons vos processus, vos outils et vos objectifs pour identifier les opportunités à fort impact.',
    items: ['Audit IA & processus', 'Cartographie des flux', 'Recommandations priorisées'],
    accent: 'var(--purple)'
  },
  {
    letter: 'A',
    icon: 'zap',
    title: 'Automatiser',
    tagline: 'Déployer des agents IA et des workflows qui travaillent pour vous.',
    text: "Nous concevons et déployons des agents IA et des scénarios d'automatisation adaptés à vos besoins.",
    items: ['Agents vocaux & chat', 'Workflows sur mesure', 'Automatisations intelligentes'],
    accent: 'var(--v)'
  },
  {
    letter: 'K',
    icon: 'book',
    title: 'Knowledge',
    tagline: 'Nourrir les agents avec vos connaissances.',
    text: 'Nous structurons et centralisons vos informations pour des agents IA plus fiables et pertinents.',
    items: ['Base de connaissances', 'FAQ & documents', 'Données internes connectées'],
    accent: 'var(--vl)'
  },
  {
    letter: 'I',
    icon: 'link',
    title: 'Intégrer',
    tagline: 'Connecter vos outils pour un écosystème fluide.',
    text: 'Nous connectons HAKILY à vos outils existants pour un flux d\'informations sans friction.',
    items: ['CRM, agenda, téléphone', 'Google Workspace, M365', 'ERP, messageries, etc.'],
    accent: 'var(--green)'
  },
  {
    letter: 'L',
    icon: 'clock',
    title: 'Libérer',
    tagline: 'Éliminer les tâches répétitives.',
    text: 'Vos équipes se concentrent sur ce qui crée de la valeur, fini le temps perdu sur l\'administratif.',
    items: ["Moins d'administratif", "Moins d'appels manqués", 'Plus de productivité'],
    accent: 'var(--orange)'
  },
  {
    letter: 'Y',
    icon: 'trending',
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

      <div className="method-track">
        {steps.map((s) => (
          <div className="method-track-item" key={s.letter} style={{ '--accent': s.accent }}>
            <div className="method-track-dot">
              <Icon name={s.icon} />
              <span className="method-track-letter">{s.letter}</span>
            </div>
            <span className="method-track-label">{s.title}</span>
          </div>
        ))}
      </div>

      <div className="method-grid">
        {steps.map((s) => (
          <div key={s.letter} className="method-card" style={{ '--accent': s.accent }}>
            <div className="method-icon-wrap">
              <div className="method-icon-circle">
                <Icon name={s.icon} />
              </div>
              <span className="method-letter">{s.letter}</span>
            </div>
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
