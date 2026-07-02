import './globals.css'

export const metadata = {
  title: 'HAKILY — Agents IA & Automatisation pour PME',
  description: 'La Méthode HAKILY : agents IA et automatisations sur mesure pour TPE & PME. Zéro appel manqué, plus de clients, plus de chiffre d\'affaires.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
