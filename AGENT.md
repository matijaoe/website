# AGENT.md

## Commands
- **Build**: `pnpm build` - Production build
- **Dev**: `pnpm dev` - Development server  
- **Generate**: `pnpm generate` - Static site generation
- **Preview**: `pnpm preview` - Preview production build
- **Lint**: `pnpm lint` - ESLint check
- **Format**: `pnpm format` - Auto-fix with ESLint
- **Package Manager**: pnpm (required for this project)

## Architecture
- **Framework**: Nuxt 4 with Vue 3, TypeScript
- **Styling**: TailwindCSS + shadcn/ui components in `components/ui/`
- **Content**: Nuxt Content with Markdown files in `content/`
- **Icons**: Nuxt Icon with Iconify collections
- **Fonts**: Satoshi, Clash Display, JetBrains Mono via Nuxt Fonts
- **No tests**: This is a personal portfolio site with no test setup

## Code Style
- **ESLint**: @antfu/eslint-config with strict rules
- **File naming**: kebab-case for non-Vue files, PascalCase for Vue components
- **TypeScript**: Interfaces/types in PascalCase, variables camelCase/snake_case/UPPER_CASE
- **Vue**: Use `<NuxtLink>` over `<a>`, self-closing tags, TypeScript in `<script setup lang="ts">`
- **Imports**: Auto-imported composables from `composables/**`
- **Braces**: 1tbs style with single-line allowed, arrow functions require parens
