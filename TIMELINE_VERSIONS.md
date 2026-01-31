# Portfolio Timeline Versions

## Branches Created

### 1. **horizontal-timeline** 
Horizontal timeline showing duration bars across the top with company logos

**Features:**
- Horizontal timeline from 2023-2026 with year markers
- Each experience has a colored duration bar showing the time span
- Company logos displayed above each timeline bar in circular badges
- Logos also shown in experience cards below the timeline
- Tooltip on hover showing company, role, and dates
- Start and end points marked with colored dots
- Color-coded: Shopify (green), Evertz (cyan/orange), McMaster Exo (magenta)

**To view:**
```bash
git checkout horizontal-timeline
npm run dev
```

### 2. **vertical-timeline** (current)
Vertical timeline with alternating left/right cards and duration bars

**Features:**
- Vertical center line with experiences alternating left and right
- Duration bars showing the full length of each experience period
- Year markers placed along the timeline
- Company logos displayed at the midpoint of each duration bar
- Each experience has its own color-coded theme
- Start and end points marked on the duration bars
- Cards contain all experience details with logos

**To view:**
```bash
git checkout vertical-timeline  
npm run dev
```

### 3. **main**
Your original version before timeline redesign

## Color Scheme
- Shopify: #00ff88 (green)
- Evertz ML Intern: #00bfff (cyan)  
- McMaster Exoskeleton: #ff00ff (magenta)
- Evertz Full Stack: #ffaa00 (orange)

## Company Logos
All logos are in `/public`:
- Shopify: `/shopify_glyph.svg`
- Evertz: `/evertz.logo.svg`
- McMaster Exoskeleton: `/exo_logo_gold_black.png`
