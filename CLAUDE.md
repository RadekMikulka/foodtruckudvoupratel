# U Dvou Přátel – Food Truck Gastro Show
## CLAUDE.md – Vývojový brief pro Claude Code

---

## 🌮 Co to je

**U Dvou Přátel** je mexický food truck, který objíždí festivaly po celé ČR. Za projektem stojí dva kámoši – DžejDžej (kuchař) a Kašík (číšník) – jejichž osud spojil láska k jídlu, cestování a trochu šílené energii. Tohle není restaurace. Je to gastroshow na kolech.

Web má jediný účel: **zaujmout návštěvníky festivalu i organizátory akcí**, dostat je do nálady, ukázat menu a přesvědčit je, aby si objednali catering.

---

## 🎨 Design systém

### Barevná paleta

| Název | Hex | Použití |
|---|---|---|
| `--color-teal` | `#00B4B4` | Primární akcent, hover stavy, bordery |
| `--color-pink` | `#FF2D7E` | CTA tlačítka, důrazy, glitch stíny |
| `--color-cream` | `#F5F0DC` | Texty nadpisů, světlé plochy |
| `--color-dark` | `#1A0A2E` | Pozadí, tmavé sekce (deep purple-black) |
| `--color-yellow` | `#FFD93D` | Ilustrace, dekorativní prvky |
| `--color-orange` | `#FF6B35` | Sekundární akcent, ceny, tagy |

### Typografie

```css
/* Headings – maximální výraz */
@import url('https://fonts.googleapis.com/css2?family=Climate+Crisis&display=swap');

/* Body text – čitelnost s charakterem */
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap');
```

- **Climate Crisis** → H1, H2, velké hero texty. Velký. Tučný. Žádné kompromisy.
- **Dongle** → veškeré tělo textu, popisky menu, navigace, footer
- Základní velikost: `18px`, line-height: `1.6`
- Nadpisy uppercase, letter-spacing trochu natažený

### Signature vizuální prvek

**Glitch text efekt** na hlavním nadpisu – inspirovaný logotypem (Image 2).  
Teal offset doleva, pink offset doprava, bílý text uprostřed. Jemná animace při loadu.

```css
.glitch-text {
  position: relative;
  color: var(--color-cream);
  font-family: 'Climate Crisis', sans-serif;
}
.glitch-text::before {
  content: attr(data-text);
  position: absolute;
  left: -3px;
  color: var(--color-teal);
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
}
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  left: 3px;
  color: var(--color-pink);
  clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
}
```

---

## 🌵 Mexické ilustrační prvky (SVG/emoji dekorace)

Používej tyto inline SVG symboly nebo emoji jako dekorativní prvky mezi sekcemi, v pozadích a jako odrážky v menu. Vždy jednoduché, stylizované, barevné.

**Sada symbolů:**
- 🌵 Kaktus – oddělení sekcí
- 💀 Calavera lebka – hero pozadí, footer
- 🎸 Kytara – vibe sekce / o nás
- 🪅 Maracas / 🎺 Trubka – festivalová sekce
- 🌶️ Chilli – menu spice indikátor
- 🍋 Limeta/citron – detail v menu sekci
- 🦜 Papoušek / ptáček – dekorativní
- 🌺 Květ hibiskus – florální detaily
- 🌮 Taco – menu ikona
- 🎭 Sombrero – hero ornament

Vytvářej tyto jako SVG komponenty nebo CSS pseudo-elementy, NE jako emoji (pro konzistenci designu). Používej barvy z palety výše.

---

## 📐 Struktura stránek

### Jedna stránka (single-page scroll) s anchor navigací

```
#hero
#o-nas  
#menu
#kde-budeme
#kontakt
```

### Sekce a jejich layout

#### 1. HERO (`#hero`)
- Celá výška obrazovky (100vh)
- Pozadí: `--color-dark` s subtilním pattern z calavera lebek (opacity 0.05)
- Logo (PNG z přílohy) jako centerpiece, max 420px width
- Pod logem: glitch text H1 "U DVOU PŘÁTEL"
- Podtitul: "Food Truck Gastro Show" – Dongle, teal barva
- Tagline: *"S láskou ke žrádlu, přátelům a cestování vstříc k novým zítřkům"*
- CTA tlačítko: "Mrkni na menu ↓" → scroll do #menu
- Floating mexické ilustrace (kaktus vlevo, maracas vpravo), CSS animace: jemné float nahoru-dolů

#### 2. O NÁS (`#o-nas`)
- Rozdělení asymetrické (60/40)
- Vlevo: text blok
- Vpravo: **velká stylizovaná SVG ilustrace** ve stylu loga (dva siluety, mexické elementy) – fotky nejsou k dispozici, nahradit ilustrací odpovídající vibe loga
- **Heading:** "DžejDžej & Kašík"
- **Subheading:** "Kuchař a číšník. Osud nás spojil."
- **Text:** *"Od té doby rozjíždíme show rozměrů intergalaktických."*
- Dekorativní kytara SVG v pozadí (opacity 0.08)
- Teal linka jako levý border na quote bloku

#### 3. MENU (`#menu`)
- Dark background sekce (`--color-dark`)
- Heading s glitch efektem: "NAŠE MENU"
- Tři kategorie jako card grid nebo tabbed interface:
  - 🌯 **BURRITOS** (3 položky)
  - 🧀 **QUESADILLAS** (2 položky)
  - 🌽 **NACHOS** (3 položky)
- Každá menu karta:
  - Název: Climate Crisis, cream
  - Popis: Dongle 400, světle šedá
  - Ikona/ilustrace kategorie
  - Thin border: `1px solid rgba(0, 180, 180, 0.3)`
  - Hover: border pink, lehký glow efekt
- **Chilli indikátor** (🌶️ SVG) pro pikantnost u položek s jalapeños

#### 4. KDE BUDEME (`#kde-budeme`)
- Světlejší sekce nebo subtle gradient
- Heading: "KDE NÁS CHYTÍŠ"
- Timeline / card seznam událostí:
  - **Jílovské pivní slavnosti** – 19.–20. června
  - **Třebsínské zvonění** – 3.–4. července
  - **Trampské Pikovice** – 12. září
- Každá událost: datum jako badge (pink/teal), název tučně, možná ikona festivalu
- Placeholder pro budoucí přidávání eventů

#### 5. KONTAKT / CTA (`#kontakt`)
- Silný závěr: celá šířka, tmavé pozadí
- Velký heading: *"Rozbalíme gastroshow i u vás!"*
- Subtext o cateringu a soukromých akcích
- Dva CTA buttony:
  - `📞 +420 608 58 40 60` → `tel:` link
  - `✉️ foodtruck@udvoupratel.fun` → `mailto:` link
- Styl tlačítek: solid fill (pink a teal), velký, kulatý border-radius
- Footer: copyright, logo malé, soc. sítě (placeholder)

---

## 🔧 Technické požadavky

### Stack
- **Astro** (statický výstup, ideální pro landing page – rychlost, jednoduchost, žádný JS overhead navíc)
- Komponenty v `.astro` souborech, styly jako scoped CSS nebo globální v `src/styles/`
- Google Fonts přes `<link>` v `<head>` (`Layout.astro`)
- Obrázky: logo PNG z `/public/logo.png`, logotyp z `/public/logotyp.png`
- Astro config: `output: 'static'`, žádný SSR server není potřeba

### Responsive
- Mobile-first přístup
- Breakpointy: `480px`, `768px`, `1024px`, `1280px`
- Na mobilu: navigation jako hamburger menu
- Menu grid: 3 sloupce → 2 → 1

### Animace (jemné, účelné)
```css
@media (prefers-reduced-motion: no-preference) {
  /* Float animace pro dekorativní prvky */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }
  
  /* Fade-in při scrollu */
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Navigace
- Sticky navbar při scrollu, průhledná na hero → tmavá při scrollu
- Logo malé vlevo, anchor linky vpravo
- Smooth scroll chování

### Performance
- Lazy-load obrázků
- Fonty s `font-display: swap`
- SVG ilustrace inline (ne jako img tagy)

---

## 📁 Struktura souborů

```
u-dvou-pratel/
├── public/
│   ├── logo.png              ← logo z přílohy
│   ├── logotyp.png           ← logotyp z přílohy
│   └── icons/                ← SVG mexické ilustrace
│       ├── cactus.svg
│       ├── skull.svg
│       ├── guitar.svg
│       ├── chili.svg
│       └── sombrero.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro      ← HTML shell, fonty, meta
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Menu.astro
│   │   ├── MenuCard.astro
│   │   ├── Events.astro
│   │   └── Contact.astro
│   ├── pages/
│   │   └── index.astro       ← single page, importuje všechny komponenty
│   ├── styles/
│   │   ├── global.css        ← reset + CSS variables (design tokeny)
│   │   └── typography.css    ← font-face, type scale
│   └── data/
│       ├── menu.ts           ← menu položky jako typed data
│       └── events.ts         ← eventy jako typed data
├── astro.config.mjs
├── package.json
└── CLAUDE.md                 ← tento soubor
```

---

## 🗂️ Data struktury (src/data/)

### `menu.ts`
```typescript
export const menuCategories = [
  {
    id: 'burritos',
    name: 'BURRITOS',
    icon: 'burrito', // SVG ikona
    items: [
      {
        name: 'Kuřecí burrito',
        description: 'Velká pšeničná tortilla plněná šťavnatým kuřecím masem, rajčaty, paprikou, salátem, fazolemi, cibulkou, cheddarem, eidamem a jalapeños.',
        tagline: 'Pořádná porce do ruky, která zasytí.',
        spicy: true,
      },
      {
        name: 'Vepřové burrito',
        description: 'Tortilla s jemnou vepřovou panenkou, fazolemi, zeleninou, červenou i bílou cibulkou, sýrem, cheddarem a jalapeños.',
        tagline: 'Mexická klasika s poctivou masovou náloží.',
        spicy: true,
      },
      {
        name: 'Zeleninové burrito',
        description: 'Celozrnná tortilla s rajčaty, paprikou, salátem, fazolemi, cibulkou, sýrem, cheddarem a jalapeños.',
        tagline: 'Lehčí varianta bez masa, ale pořád plná chuti.',
        spicy: true,
      },
    ],
  },
  {
    id: 'quesadillas',
    name: 'QUESADILLAS',
    icon: 'quesadilla',
    items: [
      {
        name: 'Kuřecí quesadilla',
        description: 'Křupavě zapečená tortilla s kuřecím masem, sýrem, cheddarem, rajčaty, cibulkou, jalapeños a salsou.',
        tagline: 'Rozteklý sýr, šťavnaté kuře, mexická pohoda.',
        spicy: true,
      },
      {
        name: 'Vepřová quesadilla',
        description: 'Zapečená tortilla s vepřovou panenkou, cheddarem, eidamem, rajčaty, cibulkou, jalapeños a salsou.',
        tagline: 'Sýrová, masová, křupavá. Přesně tak, jak má být.',
        spicy: true,
      },
    ],
  },
  {
    id: 'nachos',
    name: 'NACHOS',
    icon: 'nachos',
    items: [
      {
        name: 'Nachos se salsou',
        description: 'Kukuřičné nachos chipsy se svěží rajčatovou salsou.',
        tagline: 'Ideální na zobání nebo jako lehčí snack.',
        spicy: false,
      },
      {
        name: 'Nachos con queso',
        description: 'Nachos se salsou a rozteklým sýrem.',
        tagline: 'Jednoduchá mexická klasika, která mizí rychle.',
        spicy: false,
      },
      {
        name: 'Loaded nachos con queso',
        description: 'Nachos se salsou, sýrem, rajčaty, paprikou, červenou cibulkou, olivami a jalapeños.',
        tagline: 'Pořádně naložené nachos pro ty, kteří chtějí všechno.',
        spicy: true,
      },
    ],
  },
];
```

### `events.ts`
```typescript
export const events = [
  {
    name: 'Jílovské pivní slavnosti',
    date: '19.–20. června',
    month: 'červen',
    location: 'Jílové u Prahy',
    url: null, // doplnit pokud existuje
  },
  {
    name: 'Třebsínské zvonění',
    date: '3.–4. července',
    month: 'červenec',
    location: 'Třebsín',
    url: null,
  },
  {
    name: 'Trampské Pikovice',
    date: '12. září',
    month: 'září',
    location: 'Pikovice',
    url: null,
  },
];
```



- **Přímý, neformální, s humorem** – jako by to psali DžejDžej s Kašíkem osobně
- Žádný marketing bullshit – autentická řeč festivalových foodies
- Nadsázka je vítána ("show rozměrů intergalaktických")
- Texty v sekci O nás: první osoba množného čísla ("rozjíždíme", "objíždíme")
- Menu popisky: zachovat originální znění z briefu
- CTA: akční, přímé ("Ozvěte se", "Mrkni", "Chytni nás")

---

## 🚫 Čemu se vyhnout

- Žádné stockové fotky mexické kuchyně (raději ilustrace nebo prázdné místo s placeholder)
- Žádné generické restaurační šablony (bílé pozadí, serif font, červená/zelená)
- Žádné heavy modální okna nebo popupy
- Nepřehánět animace – stránka musí být rychlá i na festivalu na mobilu přes 4G
- Nepoužívat `#FF0000` červenou – máme vlastní paletu

---

## 🎯 Definition of Done

- [ ] Hero sekce s logem, glitch textem a CTA
- [ ] O nás sekce – DžejDžej & Kašík
- [ ] Menu sekce – všechny 3 kategorie s kartami (Burritos, Quesadillas, Nachos)
- [ ] Kde budeme – 3 eventy
- [ ] Kontakt sekce s tel + email CTA
- [ ] Sticky navigace
- [ ] Responsive (mobile + desktop)
- [ ] Mexické SVG dekorace na správných místech
- [ ] Google Fonts: Climate Crisis + Dongle
- [ ] Scroll reveal animace
- [ ] Glitch efekt na hlavním nadpisu
