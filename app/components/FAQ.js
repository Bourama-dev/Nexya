'use client'

import { useState } from 'react'

const faqItems = [
  {
    id: 1,
    question: 'C\'est trop cher pour mon entreprise',
    answer: 'Nexya coûte entre 99€ et 299€/mois selon votre volume d\'appels. Mais vous en récupérez 3-5x le coût en chantiers supplémentaires. Un artisan qui gagne 12 chantiers bonus = +96k€ de CA. Voir calcul au-dessus. Première consultation gratuite pour calibrer votre besoin.'
  },
  {
    id: 2,
    question: 'Je n\'ai pas le temps de mettre en place l\'outil',
    answer: 'Setup en 30 minutes : on branche Nexya à votre téléphone, on crée les messages auto-relance, c\'est bon. Aucune formation longue. Un support dédié assure que tout fonctionne le jour du lancement. Vous verrez les premiers résultats en 48h.'
  },
  {
    id: 3,
    question: 'Ça marche vraiment pour les artisans ?',
    answer: 'Oui. +400 plombiers, électriciens, maçons, peintres et couvreurs nous font confiance en Île-de-France. Taux de fermeture moyen +35% sur 6 mois. 94% des clients renouvellent leur forfait. Vous pouvez parler directement à nos clients en RDV gratuit.'
  },
  {
    id: 4,
    question: 'C\'est compliqué à installer ?',
    answer: 'Pas du tout. Nexya fonctionne sur votre téléphone existant (aucune app à télécharger). Le système écoute vos appels, classe les prospects, envoie les relances automatiques. Zéro code. Un de nos experts vous guide jusqu\'au dernier détail pendant le setup.'
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section id="faq" className="faq-section">
      <h2 className="section-title">Vos questions, nos réponses</h2>

      <div className="faq-container">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className={`faq-item ${openItems[item.id] ? 'open' : ''}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleItem(item.id)}
            >
              <h3>{item.question}</h3>
              <div className="faq-toggle">
                <span style={{ fontSize: '20px' }}>↓</span>
              </div>
            </div>
            <div className="faq-answer">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
