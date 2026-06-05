# Nexya - Landing Page Next.js

Landing page B2B optimisée pour conversion d'artisans BTP en France.

## Améliorations apportées

### ✅ 1. Preuve Sociale - Témoignages
- 3 témoignages fictifs mais crédibles (artisans + ville IDF + résultat chiffré)
- Design de cartes au survol avec couleur violet
- Avatars stylisés et rating 5 étoiles

### ✅ 2. Simulateur ROI Interactif
- Widget JS avec sliders pour appels/semaine et valeur moyenne chantier
- Calcul en temps réel du manque à gagner mensuel
- Affiche le potentiel récupéré avec Nexya (+35% conversion gain)
- Pédagogie claire : apprend au prospect combien il perd chaque mois

### ✅ 3. FAQ - Objections Principales
- **"C'est trop cher"** → ROI immédiat expliqué
- **"J'ai pas le temps"** → Setup 30 min, expertise comprise
- **"Ça marche vraiment ?"** → Proof (400+ clients, +35% fermeture)
- **"C'est compliqué ?"** → Zéro code, support dédié
- Accordéons smooth avec animation

### ✅ 4. CTA Urgence - Sticky Bottom
- Countdown "Places limitées en juin" avec 25j (cycle renouvelé)
- Disponibilités proches affichées ("demain, après-demain")
- Bouton sticky qui reste visible au scroll
- Pulse animation sur le badge urgence

### ✅ 5. Header NAV - Téléphone Cliquable
- +33 1 47 95 73 94 en nav (lien tel: fonctionnel)
- Branding cohérent avec Syne bold + Inter
- Navigation scroll-aware (fond blanc en light mode après scroll)

## Tech Stack

- **Next.js 14** - React framework
- **CSS vanilla** - Pas de dépendances UI (weight optimal)
- **Calendly widget** - Intégration RDV directe
- **Responsive** - Mobile-first design

## Installation & Dev

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
npm start
```

## Structure

```
app/
├── layout.js          # Root layout + Calendly
├── page.js            # Page principale
├── globals.css        # Styles globaux (couleurs, animations)
└── components/
    ├── Navigation.js  # Header + scroll awareness
    ├── Hero.js        # Hero section
    ├── Testimonials.js  # Preuve sociale
    ├── ROICalculator.js # Simulateur interactif
    ├── FAQ.js         # Accordéons objections
    ├── StickyCTA.js   # Countdown + sticky
    └── Footer.js      # Footer
```

## Design System

**Palette:**
- Primary: `#6C5CE7` (Violet)
- Light: `#A29BFE`
- Dark: `#07070F`
- Light BG: `#F5F4FF`

**Typography:**
- Headlines: Syne (800 weight)
- Body: Inter (400/500/600)

**Animations:**
- meshPulse (hero background)
- fadeUp (entrance)
- pulse (countdown dot)
- smooth scrolling

## Configuration Calendly

Remplace l'URL de Calendly dans `page.js`:
```javascript
url: 'https://calendly.com/your-calendly-url'
```

## Notes Copywriting

- Ton B2B direct, résultats chiffrés, objections traitées
- CTA toujours visible + urgence (countdown)
- Preuve sociale hyper-concrète (noms, villes réelles, résultats)
- ROI simulator : convertit les prospects indécis → conviction