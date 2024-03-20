import { titleCase } from 'scule'
import type { Category, Project } from '~/models'

const projects: Project[] = [
  {
    slug: 'fare',
    name: 'Fare',
    description: 'Application for tracking personal finances and attaining financial independence.',
    tags: ['Nuxt', 'TypeScript', 'UnoCSS', 'Prisma'],
    year: 2022,
    repo: 'https://github.com/matijaoe/fare',
    thumbnail: '/projects/fare.webp',
    categories: ['projects'],
  },
  {
    slug: 'qwiz',
    name: 'Qwiz',
    description: 'Platform for creation, organization & discovery of pub quizzes.',
    tags: ['Next', 'TypeScript', 'Nest', 'Prisma'],
    year: 2022,
    repo: 'https://github.com/qwiz-app/qwiz',
    url: 'https://app.qwiz.party',
    thumbnail: '/projects/qwiz.webp',
    categories: ['projects'],
  },
  {
    slug: 'aimo',
    name: 'Aimo',
    description: 'Social media platform connecting motivated individuals with accountability partners.',
    tags: ['Nuxt', 'Tailwind', 'Firebase'],
    year: 2021,
    repo: 'https://github.com/matijaoe/aimo',
    url: 'https://aimo.vercel.app',
    thumbnail: '/projects/aimo.webp',
    categories: ['projects'],
  },
  {
    wip: true,
    slug: 'brutoneto',
    name: 'Brutoneto',
    description: 'Advanced salary calculator for Croatian employees',
    tags: ['TypeScript', 'Nitro'],
    year: 2021,
    repo: 'https://github.com/matijaoe/brutoneto',
    categories: ['projects'],
  },
  {
    wip: true,
    slug: 'utilipea',
    name: 'Utilipea',
    description: 'Yet another utility library',
    tags: ['TypeScript', 'Bun'],
    year: 2021,
    repo: 'https://github.com/matijaoe/utilipea',
    categories: ['projects'],
  },
  {
    wip: true,
    slug: 'polenta',
    name: 'Polenta',
    description: 'Advanced Bitcoin wallet management',
    tags: ['Nuxt', 'Tailwind', 'Drizzle'],
    year: 2021,
    repo: 'https://github.com/matijaoe/polenta',
    categories: ['projects'],
  },
  {
    name: 'matijao.com',
    slug: 'matijao',
    description: 'The very website you\'re looking at right now.',
    tags: ['Nuxt', 'TypeScript', 'UnoCSS'],
    year: 2023,
    repo: 'https://github.com/matijaoe/matijao.com',
    url: 'https://matijao.com',
    thumbnail: '/projects/matijao.webp',
    categories: ['play'],
  },
  {
    slug: 'bip39-words',
    name: 'bip39 words',
    description: 'BIP-39 word lookup tool',
    tags: ['Svelte', 'TypeScript', 'Tailwind'],
    year: 2022,
    repo: 'https://github.com/matijaoe/bip39-words',
    url: 'https://bip39-rosy.vercel.app',
    thumbnail: '/projects/btc-tools.webp',
    categories: ['play'],
  },
  {
    slug: 'favicones',
    name: 'Favicônes',
    description: 'Quick and easy way to use any icon as favicon.',
    tags: ['Nuxt', 'UnoCSS', 'iconify'],
    year: 2022,
    repo: 'https://github.com/matijaoe/favicones',
    url: 'https://favicones.vercel.app/',
    thumbnail: '/projects/favicones.webp',
    categories: ['play'],
  },
  {
    slug: 'meet-mia',
    name: 'MeetMia',
    description: 'Cake shop concept project',
    tags: ['Vue', 'Vite', 'TypeScript', 'SCSS'],
    year: 2021,
    repo: 'https://github.com/matijaoe/meet-mia',
    url: 'https://meet-mia.surge.sh/',
    thumbnail: '/projects/meetmia/thumbnail.webp',
    images: [
      '/projects/meetmia/01.webp',
    ],
    categories: ['play'],
  },
  {
    slug: 'comet',
    name: 'Comet',
    description: 'Video streaming platform mockup.',
    tags: ['HTML', 'SCSS', 'JavaScript'],
    year: 2020,
    repo: 'https://github.com/matijaoe/comet',
    url: 'https://comet-blush.vercel.app',
    thumbnail: '/projects/comet.webp',
    categories: ['play'],
  },
  {
    slug: 'vue-ecosystem-snippets',
    name: 'Vue Ecosystem Snippets',
    description: 'Snippets for the modern Vue ecosystem',
    year: 2023,
    url: 'https://marketplace.visualstudio.com/items?itemName=matijao.vue-nuxt-snippets',
    repo: 'https://github.com/mat2ja/vue-ecosystem-snippets',
    tags: ['Deno', 'TypeScript', 'VSCode'],
    categories: ['extensions'],
  },
  {
    slug: 'modern-javascript-snippets',
    name: 'Modern JavaScript Snippets',
    description: 'Code snippets for modern JavaScript & TypeScript',
    year: 2023,
    url: 'https://marketplace.visualstudio.com/items?itemName=matijao.modern-js-snippets',
    repo: 'https://github.com/mat2ja/modern-javascript-snippets',
    tags: ['Deno', 'TypeScript', 'VSCode'],
    categories: ['extensions'],
  },
  {
    slug: 'url-query-editor',
    name: 'URL Query Editor',
    description: 'Simple but powerful Chrome extension for editing URL query parameters',
    year: 2023,
    repo: 'https://github.com/matijaoe/url-query-editor',
    thumbnail: '/projects/url-query-editor.webp',
    tags: ['Svelte', 'Tailwind', 'Chrome'],
    categories: ['extensions'],
  },
  {
    slug: 'pnpm-plugin-zsh',
    name: 'pnpm.plugin.zsh',
    description: 'Oh My Zsh aliases for common pnpm commands',
    year: 2023,
    repo: 'https://github.com/matijaoe/pnpm.plugin.zsh',
    tags: ['Zsh', 'pnpm'],
    categories: ['extensions'],
  },
  {
    slug: 'nuxt-starter',
    name: 'Nuxt Starter',
    description: 'Nuxt 3 & UnoCSS starter template',
    year: 2023,
    repo: 'https://github.com/matijaoe/nuxt-starter',
    url: 'https://the-nuxt-starter.vercel.app/',
    tags: ['Nuxt', 'UnoCSS', 'TypeScript'],
    categories: ['starters'],
  },
  {
    slug: 'vue-starter',
    name: 'Vue Starter',
    description: 'Vue & UnoCSS starter template',
    year: 2023,
    repo: 'https://github.com/matijaoe/vue-starter',
    url: 'https://vue-uno-starter.vercel.app/',
    tags: ['Vue', 'UnoCSS'],
    categories: ['starters'],
  },
  {
    slug: 'advent-of-code-template',
    name: 'Advent of Code Template',
    description: 'Automatic Advent of Code Template',
    year: 2023,
    repo: 'https://github.com/matijaoe/advent-of-code',
    tags: ['Bun', 'TypeScript'],
    categories: ['starters'],
  },
  {
    slug: 'vue-anu-starter',
    name: 'Vue & Anu Starter',
    description: 'Vue & Anu starter template',
    year: 2023,
    repo: 'https://github.com/matijaoe/vue-anu-starter',
    url: 'https://vue-anu-starter.vercel.app/',
    tags: ['Vue', 'UnoCSS'],
    categories: ['starters'],
  },

]

export const useProjects = () => {
  const uniqueCategories = computed(() => {
    const categories = new Set<string>()
    projects.forEach((project) => {
      project.categories.forEach((category) => {
        categories.add(category)
      })
    })

    return Array.from(categories).map((category) => {
      return {
        label: titleCase(category),
        value: category as Category,
      }
    })
  })

  const getProduct = (slug: string): Project | undefined => {
    return projects.find((project) => project.slug === slug)
  }

  const getProjectsByCategory = (category: Category): Project[] => {
    return projects.filter((project) => project.categories.includes(category))
  }

  return {
    projects,
    getProduct,
    getProjectsByCategory,
    uniqueCategories,
  }
}
