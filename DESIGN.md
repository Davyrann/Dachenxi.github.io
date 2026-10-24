# DESIGN.md: Google Antigravity

## Source
- URL: https://antigravity.google/
- Capture date: 2026-10-22
- Evidence: Firecrawl scrape (branding tokens, images list, page structure, screenshot)

## Reference Screenshot
![Full-page screenshot of Google Antigravity](./.firecrawl/antigravity-screenshot.png)

Use this screenshot as the visual source of truth for layout, hierarchy, density, and feel. Tokens below describe the same page in machine-readable form.

## Design Summary
Clean, premium Google Material Next aesthetic designed for high developer credibility. Monochromatic foundation (deep slate `#121317` on pure white `#FFFFFF`) accented with subtle Google design cues, ultra-large display typography (`Google Sans Flex`), generous whitespace, fully rounded pill buttons (`9999px`), soft-cornered card containers (`16px`-`24px`), and playful animated cursor indicators (`antigravity-cursor.png`).

---

## Design Tokens

### Colors
- **Background (Canvas)**: `#FFFFFF`
- **Surface / Card Background**: `#F8F9FA` *(inferred)*
- **Primary / Dominant**: `#121317` (Deep dark slate)
- **Text Primary**: `#121317`
- **Text Secondary / Muted**: `#45474D`
- **Accent / Interactive**: `#121317` (Monochrome primary CTA)
- **Border**: `#E2E4E8` *(inferred)*
- **Selection / Highlight**: `rgba(18, 19, 23, 0.08)` *(inferred)*

### Typography
- **Heading Font Family**: `"Google Sans Flex", "Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Body Font Family**: `"Google Sans Flex", "Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Monospace Font Family**: `"Google Sans Mono", "Roboto Mono", monospace` *(inferred)*

#### Type Scale
- **Display / Hero H1**: `80px` / line-height `1.05` / weight `500` or `600` / letter-spacing `-0.02em`
- **Section Heading H2**: `42px` / line-height `1.15` / weight `500` / letter-spacing `-0.015em`
- **Subheading / H3**: `24px` - `28px` / line-height `1.25` / weight `500`
- **Body Large**: `24px` / line-height `1.4` / weight `400`
- **Body Regular**: `16px` / line-height `1.5` / weight `400`
- **Caption / Metadata / Pill**: `12px` - `14px` / line-height `1.4` / weight `500`

### Spacing And Layout
- **Base Grid Unit**: `4px`
- **Layout Spacing**:
  - Micro: `4px`, `8px`, `12px`, `16px`
  - Container padding: `24px` (mobile), `48px` - `64px` (desktop)
  - Section vertical rhythm: `96px` - `144px`
- **Max Container Width**: `1280px` (standard), `1440px` (extended hero/grid)
- **Border Radius**:
  - Buttons & Badges: `9999px` (Pill shape)
  - Inputs: `999px` (Full rounded pill)
  - Cards & Content Blocks: `16px` - `24px`
  - Modals / Popovers: `16px`
- **Shadows**:
  - Base: `none` (flat borders and subtle background contrast preferred)
  - Card hover (subtle): `0 8px 24px rgba(0, 0, 0, 0.04)` *(inferred)*

---

## Components

### Buttons
- **Primary Button**:
  - Background: `#121317`
  - Text: `#FFFFFF`
  - Border-radius: `9999px`
  - Padding: `12px 24px`
  - Font: `15px` / weight `500`
  - Hover: Opacity `0.9` or subtle elevation
- **Secondary / Outlined Button**:
  - Background: `#FFFFFF` (or `transparent`)
  - Border: `1px solid #121317` (or `#E2E4E8`)
  - Text: `#121317`
  - Border-radius: `9999px`
  - Padding: `12px 24px`
- **Announcement Banner / Badge**:
  - Pill container with subtle gray background `#F1F3F4`
  - Small bold chip (e.g. `New`), followed by link text and chevron

### Inputs
- **Email / Subscription Input**:
  - Background: `transparent` or `#F8F9FA`
  - Text color: `#121317`
  - Border: `1px solid #E2E4E8`
  - Border-radius: `999px`
  - Padding: `12px 20px`

### Cards
- **Product & Feature Cards**:
  - Clean card container with `16px` - `24px` rounded corners
  - High-res interface previews and screenshots
  - Clean title, subtitle, and inline action link
- **Blog & Case Study Cards**:
  - 1:1 square or 16:9 thumbnails
  - Badge with publication date and category tag
  - Understated heading link

### Navigation
- **Navbar**:
  - Clean header with Google Antigravity wordmark
  - Centered navigation links (`Products`, `Use Cases`, `Pricing`, `Enterprise`, `Resources`)
  - Right-aligned actions: Language selector dropdown + CTA buttons (`Launch Remote Control`, `Download`)
- **Footer**:
  - Clean structured sitemap columns: Product, Resources, Legal / Google links

---

## Brand Imagery & Assets
- **Logo**: SVG Google Antigravity wordmark
- **Favicon**: `https://antigravity.google/favicon.svg`
- **OG Image**: `https://antigravity.google/assets/image/sitecards/sitecard-default.png`
- **Visual Motif**: Floating Antigravity cursor (`https://antigravity.google/assets/image/antigravity-cursor.png`)
- **Hero & Feature Media**:
  - `https://antigravity.google/assets/image/product/new-chat.png`
  - `https://antigravity.google/assets/image/landing/antigravity-cli.png`
  - `https://antigravity.google/assets/image/landing/feature-3.jpg`
  - `https://antigravity.google/assets/image/landing/landing-thumbnail-fullstack.jpg`
  - `https://antigravity.google/assets/image/landing/landing-thumbnail-enterprise.jpg`
  - `https://antigravity.google/assets/image/landing/landing-thumbnail-frontend.jpg`

---

## Page Patterns
1. **Header**: Minimal top bar with mega-menu dropdown capabilities.
2. **Hero**: Notification pill -> Giant display heading (`Experience liftoff with the next-gen agent platform`) -> Primary Download CTA + platform availability -> Video/Intro preview.
3. **Product Suite Tabs/Grid**: Antigravity App, Antigravity CLI, Antigravity IDE, Antigravity SDK with clear UI mockups.
4. **Persona Use Cases**: Role-based carousel/cards (Full-stack, Enterprise, Frontend).
5. **Pricing / Value Tiers**: Free tier highlight ("Available at no charge for developers") alongside Enterprise tier.
6. **Blog / Resources Grid**: Latest updates with square preview cards.
7. **Newsletter / Updates Subscription**: Interactive category toggle chips and pill email input.
8. **Footer**: Comprehensive directory links and Google branding.

---

## Content Style
- **Tone**: Professional, visionary, developer-focused, uncluttered.
- **Voice**: Direct, clear, technical credibility without unnecessary hype.
- **CTA Verbs**: `Download`, `Launch Remote Control`, `Explore Product`, `View case`, `Read blog`.

---

## Agent Build Instructions
1. Setup a responsive container with max width `1280px` centered with auto margins.
2. Apply `Google Sans Flex` or system sans-serif fallback as default typography.
3. Keep the color palette restricted: monochrome dark slate `#121317` on pure white `#FFFFFF` with muted secondary text `#45474D`.
4. Style all interactive buttons with `border-radius: 9999px` (pill format).
5. Use generous section padding (`96px+` top/bottom on desktop) to give content room to breathe.
6. Preserve flat surface styling; do not add heavy drop shadows or gradient backgrounds.

---

## Rerun Inputs
```yaml
workflow: firecrawl-website-design-clone
source_url: https://antigravity.google/
target_stack: agnostic
output: Antigravity/DESIGN.md
```
