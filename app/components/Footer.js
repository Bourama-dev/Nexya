'use client'

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-col">
          <div className="foot-logo">
            Ne<em>xy</em>a
          </div>
          <p style={{ marginTop: '12px', lineHeight: '1.6', fontSize: '12px' }}>
            Nexya : zéro appel manqué. Automatisation intelligente pour artisans BTP.
          </p>
        </div>

        <div className="footer-col">
          <h4>Produit</h4>
          <a href="#roi">Calculer mon ROI</a>
          <a href="#faq">FAQ</a>
          <a href="#testimonials">Cas clients</a>
          <a href="tel:0766125841">☎️ 07 66 12 58 41</a>
          <a href="mailto:bouramad900@gmail.com">📧 Nous écrire</a>
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
          <a href="mailto:bouramad900@gmail.com">bouramad900@gmail.com</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Nexya. Tous droits réservés. Automatisez vos RDV, fermez plus de chantiers.</p>
      </div>
    </footer>
  )
}
