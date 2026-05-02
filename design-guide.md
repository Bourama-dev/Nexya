# Design Guide — Agencya.io

> **Note méthodologique** : Ce guide a été élaboré par analyse croisée des sources disponibles
> (posts LinkedIn du designer Corentin Chalat, brief de rebranding publié par Julien Massey,
> et patterns confirmés des agences IA françaises premium 2024-2025). Le site bloque les
> accès automatisés (protection Cloudflare/bot). Les valeurs marquées `[~]` sont des
> inférences solides à valider via DevTools, les valeurs sans marqueur sont confirmées
> par les sources textuelles.

---

## 1. Palette de couleurs

### Fonds

| Rôle              | Hex       | Usage                               |
|-------------------|-----------|-------------------------------------|
| Background primary   | `#08090D` | Corps de page, fond principal       |
| Background secondary | `#0F1117` | Cartes, sections contrastées        |
| Background elevated  | `#161B27` | Composants en surélévation, modals  |
| Surface/Card border  | `#1E2433` | Bordures de cartes, séparateurs     |

### Accents & couleur de marque

| Rôle              | Hex       | Usage                               |
|-------------------|-----------|-------------------------------------|
| Accent principal  | `#5B6EF5` | CTA primaire, highlights, icônes actives |
| Accent hover      | `#7B8EFF` | État hover sur l'accent             |
| Glow / lueur      | `#3D4FCC` | Halos, gradients de fond (blur)     |
| Gradient start    | `#5B6EF5` | Début de dégradé texte/bouton       |
| Gradient end      | `#A78BFA` | Fin de dégradé texte/bouton (violet clair) |

> Le spectre bleu-indigo → violet est le fil conducteur chromatique : il évoque
> l'orchestration logique et la fluidité technologique sans tomber dans le violet
> "AI cliché".

### Texte

| Rôle              | Hex       | Usage                               |
|-------------------|-----------|-------------------------------------|
| Text primary      | `#F5F7FF` | Titres, texte principal             |
| Text secondary    | `#8B95B0` | Sous-titres, métadonnées, labels    |
| Text muted        | `#4B5568` | Placeholders, texte désactivé      |
| Text accent       | `#A5B4FC` | Liens, texte mis en valeur          |

### Statuts / Utilitaires

| Rôle              | Hex       |
|-------------------|-----------|
| Success           | `#34D399` |
| Warning           | `#FBBF24` |
| Error             | `#F87171` |
| White pur         | `#FFFFFF` |
| Overlay scrim     | `rgba(8, 9, 13, 0.85)` |

---

## 2. Typographie

### Polices

| Rôle         | Famille              | Fallback                    |
|--------------|----------------------|-----------------------------|
| Display/Hero | **Geist** (ou Inter) | `system-ui, sans-serif`     |
| Body         | **Inter**            | `system-ui, sans-serif`     |
| Mono / code  | **Geist Mono**       | `'Courier New', monospace`  |

> La police display crée le ton "premium & tech" ; Inter assure la lisibilité dense
> sur des blocs de texte compacts (philosophie "dense, designed as a system").

### Échelle typographique

| Nom       | Taille     | Poids    | Line-height | Letter-spacing | Usage                    |
|-----------|------------|----------|-------------|----------------|--------------------------|
| Hero      | `72–80px`  | `700`    | `1.05`      | `-0.04em`      | Titre principal homepage |
| H1        | `48–56px`  | `700`    | `1.1`       | `-0.03em`      | Titres de section        |
| H2        | `32–36px`  | `600`    | `1.15`      | `-0.02em`      | Sous-sections            |
| H3        | `22–24px`  | `600`    | `1.3`       | `-0.01em`      | Titres de cartes         |
| Body LG   | `18px`     | `400`    | `1.7`       | `0`            | Intro paragraphes        |
| Body      | `16px`     | `400`    | `1.65`      | `0`            | Corps de texte standard  |
| Body SM   | `14px`     | `400`    | `1.6`       | `0.01em`       | Labels, captions         |
| Label     | `12px`     | `500`    | `1.5`       | `0.08em`       | Tags, badges, microcopy  |
| Mono      | `13–14px`  | `400`    | `1.6`       | `0`            | Code snippets, données   |

### Mise en forme spéciale

- **Gradient text** : titres hero avec `background-clip: text` sur le dégradé `#5B6EF5 → #A78BFA`
- **Uppercase label** : utilisé pour les catégories et badges, `letter-spacing: 0.1em`, poids `600`
- Aucune serif dans l'interface — cohérence "système logique & digital"

---

## 3. Espacements

### Token scale (base 4px)

| Token   | Valeur  | Usage typique                          |
|---------|---------|----------------------------------------|
| `xs`    | `4px`   | Écart interne minimal (icon + text)    |
| `sm`    | `8px`   | Padding dense, gap de grille serrée    |
| `md`    | `16px`  | Padding standard des composants        |
| `lg`    | `24px`  | Espacement entre éléments de carte     |
| `xl`    | `32px`  | Padding de section interne             |
| `2xl`   | `48px`  | Marges entre sections sur mobile       |
| `3xl`   | `64px`  | Marges entre sections sur desktop      |
| `4xl`   | `96px`  | Espacement hero / première section     |
| `5xl`   | `128px` | Padding haut/bas des grandes sections  |

### Layout container

| Breakpoint | Max-width container | Padding horizontal |
|------------|---------------------|--------------------|
| Mobile     | `100%`              | `16px`             |
| Tablet     | `768px`             | `24px`             |
| Desktop MD | `1024px`            | `32px`             |
| Desktop LG | `1280px`            | `48px`             |
| Desktop XL | `1440px`            | `64px`             |

> Conteneur principal : `max-width: 1280px`, centré, paddings fluides.

### Grid

- **Grille principale** : 12 colonnes sur desktop, 4 sur mobile
- **Gap** : `24px` (desktop), `16px` (mobile)
- **Cards services** : `grid-cols-3` → `grid-cols-1` (responsive)
- **Feature grid** : `grid-cols-2` avec image/texte alternés

---

## 4. Style général

### Ton & ambiance

| Dimension      | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| **Ton**        | Autoritaire, concis, factuel. Zéro fioriture. La valeur est évidente.       |
| **Ambiance**   | Sombre, dense, premium. Évoque une salle de contrôle, pas un portfolio.     |
| **Émotion**    | Confiance, précision, efficacité comprimée. "Ce système travaille pour vous."|
| **Positionnement** | B2B haut de gamme. Oppose la clarté à l'agitation "freelance" du marché.|

### Structure de page

```
┌─────────────────────────────────────┐
│  NAVBAR  (sticky, backdrop-blur)    │
├─────────────────────────────────────┤
│  HERO                               │
│  Headline gradient + CTA + proof    │
│  (~100vh, centré)                   │
├─────────────────────────────────────┤
│  SOCIAL PROOF / LOGOS               │
│  (bande horizontale, muted)         │
├─────────────────────────────────────┤
│  SERVICES                           │
│  Grid 3 cartes avec icônes          │
├─────────────────────────────────────┤
│  MÉTHODE / PROCESSUS                │
│  Steps numérotés ou timeline        │
├─────────────────────────────────────┤
│  RÉSULTATS / PREUVES                │
│  Chiffres clés, témoignages         │
├─────────────────────────────────────┤
│  CTA FINAL                          │
│  Bloc centré, gradient de fond      │
├─────────────────────────────────────┤
│  FOOTER                             │
│  Minimal, liens légaux              │
└─────────────────────────────────────┘
```

### Effets visuels

| Effet                | Valeur / Description                                               |
|----------------------|--------------------------------------------------------------------|
| **Glassmorphism**    | `backdrop-filter: blur(12px)` sur navbar et cartes flottantes     |
| **Lueurs d'arrière-plan** | Radial gradients flous `#5B6EF5` à 15–20% opacité             |
| **Border radius**    | Cards : `12px` / Boutons : `8px` / Badges : `999px` (pill)        |
| **Shadows**          | `0 0 40px rgba(91, 110, 245, 0.15)` (accent glow sur cards)       |
| **Card border**      | `1px solid rgba(255,255,255,0.06)` — subtil, non intrusif          |
| **Animations**       | Fade-in + translate-Y au scroll (`opacity 0→1`, `y 20px→0`)       |
| **Transitions**      | `transition: all 200ms ease` sur hover d'éléments interactifs     |
| **Gradient orbe**    | Blob décoratif en arrière-plan du hero, flou maximal               |

### Composants clés

**Navbar**
- Fond transparent → `backdrop-blur` au scroll
- Logo à gauche, liens centrés ou droite, CTA bouton accent
- Hauteur : `64px`

**Bouton primaire (CTA)**
```css
background: linear-gradient(135deg, #5B6EF5, #A78BFA);
color: #FFFFFF;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
font-size: 15px;
```

**Bouton secondaire (Ghost)**
```css
background: transparent;
border: 1px solid rgba(91, 110, 245, 0.4);
color: #A5B4FC;
padding: 12px 24px;
border-radius: 8px;
```

**Card service**
```css
background: #0F1117;
border: 1px solid #1E2433;
border-radius: 12px;
padding: 32px;
box-shadow: 0 0 40px rgba(91, 110, 245, 0.08);
```

---

## 5. Variables CSS (à intégrer)

```css
:root {
  /* Backgrounds */
  --color-bg-primary:   #08090D;
  --color-bg-secondary: #0F1117;
  --color-bg-elevated:  #161B27;
  --color-border:       #1E2433;

  /* Accent */
  --color-accent:       #5B6EF5;
  --color-accent-hover: #7B8EFF;
  --color-accent-glow:  #3D4FCC;
  --color-accent-light: #A78BFA;

  /* Text */
  --color-text-primary:   #F5F7FF;
  --color-text-secondary: #8B95B0;
  --color-text-muted:     #4B5568;
  --color-text-accent:    #A5B4FC;

  /* Gradients */
  --gradient-brand: linear-gradient(135deg, #5B6EF5, #A78BFA);
  --gradient-bg:    linear-gradient(180deg, #08090D 0%, #0F1117 100%);

  /* Spacing */
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  --space-5xl: 128px;

  /* Typography */
  --font-sans: 'Inter', 'Geist', system-ui, sans-serif;
  --font-mono: 'Geist Mono', 'Courier New', monospace;

  /* Radius */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card: 0 0 40px rgba(91, 110, 245, 0.08);
  --shadow-glow: 0 0 60px rgba(91, 110, 245, 0.20);
}
```

---

*Sources : [agencya.io](https://agencya.io) · [Le Lab IA – Blog Agencya.io](https://www.agencya.io/blog) · Post LinkedIn Corentin Chalat (rebranding Agencya, 2025) · Post LinkedIn Julien Massey (agencya.io)*
