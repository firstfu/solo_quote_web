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

This is a Next.js 16 application using the **App Router** pattern with TypeScript and Tailwind CSS v4.

### Key Technical Stack
- **Next.js 16** with App Router (not Pages Router)
- **React 19** with server components by default
- **TypeScript** in strict mode
- **Tailwind CSS v4** via @tailwindcss/postcss plugin
- **Geist fonts** (Sans and Mono) loaded via next/font

### Path Alias
- `@/*` maps to the project root directory

### Styling Approach
- Tailwind CSS utility classes (inline)
- Dark mode via `prefers-color-scheme` media query
- CSS custom properties defined in `app/globals.css`
