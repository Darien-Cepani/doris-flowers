# Doris Flowers — Brand Guidelines

## Brand Identity

Doris Flowers is a luxury rose atelier in Tirana built around one feeling: romance at its most dramatic. Where other florists whisper, Doris declares. The house is defined by bold red roses, lavish heart arrangements, and gold-on-black opulence — passionate, theatrical, and unapologetically indulgent.

Every bouquet is hand-tied to order and delivered same-day across Tirana. The brand speaks to those marking the moments that matter most: anniversaries, proposals, grand gestures, and weddings that deserve to be remembered.

- **Name:** Doris Flowers
- **Wordmark:** DORIS
- **Tagline:** Rose Atelier · Tirana
- **Instagram:** [@doris_flowers_tirane](https://instagram.com/doris_flowers_tirane)
- **Location:** Rruga e Durrësit, Pallati 5, Tirana 1001, Albania
- **Delivery:** Same-day across Tirana for orders before 16:00
- **Personality:** Dramatic, passionate, opulent, romantic, confident

## Logo

The primary mark pairs a refined gold rose bloom — detailed in deep red at its heart — with the DORIS wordmark set in widely tracked Montserrat-style capitals. A thin gold hairline separates the wordmark from the "ROSE ATELIER · TIRANA" tagline beneath.

- Master artwork: `Brand/logo.svg` (≈520×260, champagne background)
- Clear space: keep at least the height of the "D" clear on all sides
- Minimum width: 160px digital
- Do not recolor the wordmark, stretch the mark, or place it on busy imagery without a champagne or deep-night backing panel

## Color Palette

| Token            | Name           | Hex       | Role |
|------------------|----------------|-----------|------|
| `brand-dark`     | Rose Ink       | `#2A0A0C` | Primary ink / body text |
| `brand-night`    | Midnight Wine  | `#120304` | Deepest backgrounds (loader, hero, footer) |
| `brand-gold`     | Atelier Gold   | `#C9A24B` | Signature accent, hairlines, highlights |
| `brand-deep`     | Deep Rose Red  | `#9C2A26` | Accent text & hairlines on light surfaces |
| `brand-champagne`| Champagne Cream| `#F8F0E8` | Soft section backgrounds |
| `brand-red`      | Crimson Rose   | `#9B1B1F` | Notification / highlight accent |

The system is fully token-based via Tailwind. Gold on near-black delivers the opulence; deep red carries the passion; champagne provides breathing room.

## Typography

- **Playfair Display** (`serif`) — editorial display serif for headlines and quotes; dramatic, high-contrast, romantic. Weights 400–700 plus italics.
- **Montserrat** (`display`) — geometric sans for the wordmark, eyebrows, navigation, and uppercase tracked labels. Weights 100–900.
- **Inter** (`sans`) — clean, legible body copy and UI text. Weights 300–600.

Pairing principle: Playfair Display for emotion and statement, Montserrat for structure and luxe labelling, Inter for quiet readability.

## Website Style & Layout

- Full-screen video hero over a midnight-wine wash with a gold eyebrow and a Playfair Display headline.
- Animated splash preloader with a gold shimmer sweeping across the DORIS wordmark.
- Editorial philosophy section, four-card floral collections, and a filterable flower collection (Bouquets, Roses, Arrangements, Weddings).
- Signature product: the Red Rose Heart Arrangement — a lavish heart of velvet red roses for anniversaries.
- Weddings & events consultation block, a desaturated Leaflet map of the Tirana shop, social grid, and a footer newsletter ("Bloom Club"–style list).
- Custom cursor, GSAP scroll reveals and parallax, fully bilingual (English / Albanian).
- Generous champagne whitespace, hairline gold rules, and uppercase Montserrat micro-labels keep the opulence disciplined rather than cluttered.

## Tech

- **React 18** + **Vite** single-page app
- **Tailwind CSS** with token-based `brand` color system
- **GSAP** + ScrollTrigger (`@gsap/react`) for animation
- **Leaflet** (loaded at runtime) for the shop map
- **lucide-react** icon set
- Google Fonts: Playfair Display, Montserrat, Inter
