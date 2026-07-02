'use client'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

const months = ['M0', 'M1', 'M2', 'M3', 'M4', 'M5', 'M6']

const metrics = [
  {
    id: 'ca',
    label: "Chiffre d'affaires",
    delta: '+127%',
    data: [100, 112, 128, 148, 175, 205, 227].map((avec, i) => ({
      mois: months[i],
      sans: [100, 102, 104, 106, 109, 111, 112][i],
      avec
    }))
  },
  {
    id: 'appels',
    label: 'Appels entrants',
    delta: '+152%',
    data: [100, 118, 138, 162, 195, 225, 252].map((avec, i) => ({
      mois: months[i],
      sans: [100, 100, 100, 101, 101, 101, 100][i],
      avec
    }))
  },
  {
    id: 'conversion',
    label: 'Taux de conversion',
    delta: '+67%',
    data: [100, 112, 125, 138, 152, 160, 167].map((avec, i) => ({
      mois: months[i],
      sans: 100,
      avec
    }))
  },
  {
    id: 'clients',
    label: 'Clients gagnés',
    delta: '+148%',
    data: [100, 120, 143, 168, 198, 225, 248].map((avec, i) => ({
      mois: months[i],
      sans: 100,
      avec
    }))
  }
]

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null
  return (
    <div className="chart-tooltip">
      <div className="chart-tooltip-label">{label}</div>
      {payload.map((p) => (
        <div key={p.dataKey} className="chart-tooltip-row">
          <span className={`chart-tooltip-dot ${p.dataKey}`}></span>
          {p.dataKey === 'avec' ? 'Avec HAKILY' : 'Sans HAKILY'} : <strong>{p.value}</strong>
        </div>
      ))}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats-section">
      <p className="eyebrow">Des résultats concrets, une croissance continue</p>
      <h2 className="section-title">L'impact de la Méthode HAKILY sur votre performance</h2>

      <div className="chart-legend">
        <span className="chart-legend-item"><span className="chart-legend-swatch sans"></span>Sans HAKILY</span>
        <span className="chart-legend-item"><span className="chart-legend-swatch avec"></span>Avec HAKILY</span>
      </div>

      <div className="stats-grid">
        {metrics.map((m) => (
          <div className="stat-card" key={m.id}>
            <div className="stat-card-head">
              <span className="stat-label">{m.label}</span>
              <span className="stat-delta">{m.delta}</span>
            </div>
            <div className="stat-chart">
              <ResponsiveContainer width="100%" height={140}>
                <LineChart data={m.data} margin={{ top: 6, right: 8, bottom: 0, left: 8 }}>
                  <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
                  <XAxis
                    dataKey="mois"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }}
                  />
                  <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                  <Tooltip content={<ChartTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.15)' }} />
                  <Line
                    type="monotone"
                    dataKey="sans"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth={2}
                    strokeDasharray="5 4"
                    dot={false}
                    activeDot={{ r: 4, fill: 'rgba(255,255,255,0.6)' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="avec"
                    stroke="var(--vl)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 5, fill: 'var(--vl)', stroke: 'var(--dark)', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      <p className="stats-caption">
        Index base 100 · Données moyennes observées chez nos clients TPE/PME entre 3 et 6 mois après la mise en place.
      </p>
    </section>
  )
}
