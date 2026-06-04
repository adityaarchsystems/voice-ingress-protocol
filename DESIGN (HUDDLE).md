---
name: Kinetic Collaboration
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#474554'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#787586'
  outline-variant: '#c8c4d7'
  surface-tint: '#5847d2'
  primary: '#5341cd'
  on-primary: '#ffffff'
  primary-container: '#6c5ce7'
  on-primary-container: '#faf6ff'
  inverse-primary: '#c6bfff'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#56f9f9'
  on-secondary-container: '#007071'
  tertiary: '#884800'
  on-tertiary: '#ffffff'
  tertiary-container: '#ac5d00'
  on-tertiary-container: '#fff5f1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4dfff'
  primary-fixed-dim: '#c6bfff'
  on-primary-fixed: '#160066'
  on-primary-fixed-variant: '#4029ba'
  secondary-fixed: '#56f9f9'
  secondary-fixed-dim: '#26dcdd'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f50'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e5e2e1'
  canvas: '#E8E8E3'
  sand: '#E4B976'
  blush: '#F1C2D3'
  mint: '#C5E4D2'
typography:
  display:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is built for a playful yet professional creative marketplace. The brand personality is collaborative, energetic, and high-end, targeting creative professionals and builders. 

The design style is a blend of **Modern Corporate** and **Neo-Minimalism**. It utilizes a sophisticated off-white base to provide a gallery-like feel, allowing vibrant accent colors to highlight interactive elements. The aesthetic relies on generous whitespace, crisp structural lines, and smooth motion to evoke a sense of organized creativity.

## Colors

The palette is anchored by a warm neutral canvas (`#E8E8E3`) rather than a sterile white, creating a premium, tactile foundation. 

- **Primary & Secondary:** A deep electric purple and vibrant teal are used exclusively for primary actions, success states, and brand-critical highlights.
- **Surface Palette:** The named colors (Sand, Blush, Mint) serve as secondary background fills for cards or tags, adding a rhythmic, playful variety to the interface without overwhelming the user.
- **Typography & Strokes:** All high-contrast elements use `#222222` to ensure legibility and a grounded, professional feel.

## Typography

This design system uses a triple-font approach to balance personality and utility. 

- **Hanken Grotesk** is used for headlines to provide a sharp, contemporary edge. It should be set with tight letter-spacing for large displays.
- **Inter** handles all body copy and functional text, ensuring maximum readability across devices.
- **JetBrains Mono** is used sparingly for labels, metadata, and "utility" text, reinforcing the "builder" and "works" aspect of the platform.

Text should primarily be rendered in the neutral `#222222` color. Use weight shifts (Medium to Semibold) rather than color shifts to establish hierarchy.

## Layout & Spacing

The layout follows a **Fluid-Fixed Hybrid** model. Content is contained within a 1280px max-width container, centered on the viewport. 

- **Grid:** A 12-column grid is used for desktop, transitioning to 6 columns for tablet and 2 columns for mobile.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Sectioning:** Large vertical gaps (80px to 120px) should be used between major sections to maintain the "gallery" feel and prevent visual clutter.

## Elevation & Depth

This system avoids heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

- **Surfaces:** Depth is created by placing white (`#FFFFFF`) or accented cards on top of the canvas (`#E8E8E3`) background.
- **Outlines:** Use a 1px solid stroke in `#222222` with very low opacity (10-15%) to define boundaries.
- **Active State Elevation:** When a component is hovered or active, it may use a subtle, crisp "hard shadow" (2px offset, no blur) in the primary color to simulate physical lift without the fuzziness of traditional shadows.

## Shapes

The shape language is consistently **Rounded**, reflecting a friendly and approachable personality. 

- **Standard Elements:** Buttons, inputs, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Project cards and sections use a 1rem (16px) radius to soften the layout.
- **Interactive Indicators:** Elements like "Add" buttons or status dots should remain fully circular (pill-shaped).

## Components

### Buttons
Primary buttons are solid blocks of the primary purple or secondary teal with white text. Secondary buttons use a transparent background with a 1px border. All buttons must have a distinct hover state that either fills the background or shifts the "hard shadow" offset.

### Cards
Cards are the primary vehicle for content. They should feature a white background, the standard 16px corner radius, and a subtle border. Internal padding should be generous (min 24px).

### Chips & Tags
Use the named palette (Sand, Blush, Mint) for category tags. These should have no border and use the `label-caps` typography style for a technical, organized look.

### Input Fields
Inputs should be minimalist: a 1px border on the bottom only, or a fully enclosed box with a very light neutral fill. Use `Inter` for input text and `JetBrains Mono` for field labels.

### Playful Accents
Incorporate "Sticker" components—small, slightly rotated elements or icons that break the grid—to reinforce the collaborative, "in-progress" nature of the work platform.