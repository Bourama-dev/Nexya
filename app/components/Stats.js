'use client'

export default function Stats() {
  const stats = [
    { num: '400+', label: 'Artisans BTP<br/>utilisent Nexya' },
    { num: '+35%', label: 'Gain moyen de<br/>fermeture chantiers' },
    { num: '+5h/semaine', label: 'Temps gagné<br/>par artisan' },
    { num: '24/7', label: 'Répondeur vocal<br/>automatisé' }
  ]

  return (
    <div className="stats-wrap">
      {stats.map((stat, idx) => (
        <div key={idx} className="stat rv" data-d={idx + 1}>
          <span className="stat-num">{stat.num}</span>
          <span className="stat-label" dangerouslySetInnerHTML={{ __html: stat.label }} />
        </div>
      ))}
    </div>
  )
}
