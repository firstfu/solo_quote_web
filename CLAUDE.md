# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
# Development server (localhost:3000)
bun dev

# Production build
bun run build

# Start production server
bun start

# Linting
bun run lint
```

Note: This project uses Bun as the package manager (bun.lock present).

## Architecture Overview

This is a **Next.js 16** landing page for **接案神器 SoloQuote** - a quotation management app for Taiwanese freelancers.

### Technical Stack
- **Next.js 16** with App Router (not Pages Router)
- **React 19** with server components by default
- **TypeScript** in strict mode
- **Tailwind CSS v4** via @tailwindcss/postcss plugin
- **Fonts**: Noto Sans TC (Chinese text) + Outfit (display headings) via next/font

### Path Alias
- `@/*` maps to the project root directory

## Project Structure

```
app/
├── page.tsx              # Landing page (assembles all sections)
├── layout.tsx            # Root layout with fonts and metadata
├── globals.css           # Design system (colors, utilities, animations)
├── components/           # Landing page sections
│   ├── Navbar.tsx        # Sticky navigation
│   ├── Hero.tsx          # Hero with phone mockup
│   ├── PainPoints.tsx    # Problem → Solution cards
│   ├── Features.tsx      # 6 feature cards
│   ├── Screenshots.tsx   # Interactive app gallery (client component)
│   ├── Pricing.tsx       # Free vs Pro comparison
│   ├── CTA.tsx           # Final call-to-action
│   └── Footer.tsx        # Links and copyright
├── privacy/page.tsx      # Privacy policy (Traditional Chinese)
└── terms/page.tsx        # Terms of use (Traditional Chinese)

public/screenshots/       # App screenshots for mockups
```

## Design System

The site uses a **"Midnight Gold"** dark theme defined in `globals.css`:

### Color Palette (CSS Custom Properties)
- **Backgrounds**: `--color-bg-deep` (#060D18), `--color-bg-primary`, `--color-bg-card`
- **Gold accents**: `--color-gold-400` (#D4A853) is the primary accent
- **Text**: `--color-text-primary` (white), `--color-text-secondary` (#94A3B8)

### Utility Classes (defined in globals.css)
- `.glass-card` / `.glass-card-gold` - Glassmorphism cards
- `.btn-gold` / `.btn-outline` - Button styles
- `.text-gradient-gold` / `.text-gradient-white` - Gradient text
- `.phone-mockup` / `.phone-screen` - iPhone mockup styling
- `.glow-gold` / `.glow-gold-lg` - Gold glow effects
- `.animate-float` / `.animate-fade-in-up` - Animations

### Tailwind v4 Notes
- Use `bg-linear-to-br` instead of `bg-gradient-to-br` (canonical class names)
- Use `py-3!` instead of `!py-3` for important modifiers
