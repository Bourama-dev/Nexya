'use client'

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-col">
          <div className="foot-logo">
            H<em>A</em>KILY
          </div>
          <p style={{ marginTop: '12px', lineHeight: '1.6', fontSize: '12px' }}>
            HAKILY : agents IA & automatisation pour PME. La Méthode HAKILY™ — l'IA qui travaille pendant que vous travaillez.
          </p>
        </div>

        <div className="footer-col">
          <h4>Produit</h4>
          <a href="#method">La Méthode HAKILY</a>
          <a href="#roi">Calculer mon CA</a>
          <a href="#faq">FAQ</a>
          <a href="#testimonials">Cas clients</a>
          <a href="tel:+33147957394">Support : +33 1 47 95 73 94</a>
        </div>

        <div className="footer-col">
          <h4>Légal</h4>
          <a href="#">Conditions d'utilisation</a>
          <a href="#">Politique de confidentialité</a>
          <a href="#">CGV</a>
          <a href="#">Mentions légales</a>
        </div>

        <div className="footer-col">
          <h4>Nous suivre</h4>
          <a href="https://linkedin.com">LinkedIn</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://facebook.com">Facebook</a>
          <a href="mailto:contact@hakily.fr">contact@hakily.fr</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 HAKILY. Tous droits réservés. La Méthode HAKILY™ — agents IA & automatisation pour PME.</p>
      </div>
    </footer>
  )
}
