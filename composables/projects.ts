import { Category, type CategorySlug, type Project } from '~/models'

const categories: Record<CategorySlug, string> = {
  [Category.projects]: 'Projects',
  [Category.hobby]: 'Hobby',
  [Category.modules]: 'Modules',
  [Category.extensions]: 'Plugins & Extensions',
  [Category.templates]: 'Templates',
}

const projects: Project[] = [
  {
    slug: 'wordware',
    name: 'Wordware',
    description: 'Sleek passphrase generator and wordlist manager.',
    tech: ['Nuxt', 'TypeScript', 'Shadcn', 'Tailwind'],
    techPreview: ['Nuxt', 'ts', 'Shadcn', 'Tailwind'],
    timeframe: '2024',
    repo: 'https://github.com/matijaoe/wordware',
    url: 'https://wordware.vercel.app/',
    thumbnail: '/projects/wordware-dark.webp',
    categories: [Category.projects],
    color: '#CD56DA',
    featured: true,
    maintained: true,
  },
  {
    slug: 'fare',
    name: 'Fare',
    description: 'Application for tracking personal finances and attaining financial independence.',
    tech: ['Nuxt', 'TypeScript', 'UnoCSS', 'Tanstack Query', 'Prisma', 'PlanetScale'],
    techPreview: ['Nuxt', 'ts', 'UnoCSS', 'Tanstack'],
    timeframe: '2022',
    repo: 'https://github.com/matijaoe/fare',
    thumbnail: '/projects/fare.webp',
    categories: [Category.projects],
    color: '#36D49A',
    featured: true,
  },
  {
    slug: 'qwiz',
    name: 'Qwiz',
    description: 'Platform for creation, organization & discovery of pub quizzes.',
    tech: ['Next', 'TypeScript', 'React Query', 'Mantine UI', 'Nest.js', 'Prisma', 'PlanetScale'],
    techPreview: ['Next', 'React Query', 'Nest', 'Prisma'],
    timeframe: '2022',
    repo: 'https://github.com/qwiz-app/qwiz',
    url: 'https://app.qwiz.party',
    thumbnail: '/projects/qwiz.webp',
    categories: [Category.projects],
    color: '#F4BD94',
    featured: true,
  },
  {
    slug: 'aimo',
    name: 'Aimo',
    description: 'Social media platform connecting motivated individuals with accountability partners.',
    tech: ['Nuxt', 'JavaScript', 'Vuex', 'Tailwind', 'Firebase'],
    techPreview: ['Nuxt', 'Tailwind', 'Firebase'],
    timeframe: '2021',
    repo: 'https://github.com/matijaoe/aimo',
    url: 'https://aimo.vercel.app',
    thumbnail: '/projects/aimo.webp',
    categories: [Category.projects],
    color: '#F5D765',
    featured: true,
  },
  {
    wip: true,
    slug: 'brutoneto',
    name: 'Brutoneto',
    description: 'Advanced salary calculator API for Croatian employees',
    tech: ['TypeScript', 'Nitro', 'Zod'],
    techPreview: ['ts', 'Nitro', 'Zod'],
    timeframe: '2024',
    repo: 'https://github.com/matijaoe/brutoneto-api',
    categories: [Category.projects],
  },
  {
    wip: true,
    slug: 'polenta',
    name: 'Polenta',
    description: 'Advanced Bitcoin wallet management.',
    tech: ['Nuxt', 'TypeScript', 'Tailwind', 'Nuxt UI', 'bitcoinjs', 'Drizzle', 'Prisma', 'Tauri', 'SQLite'],
    techPreview: ['Nuxt', 'ts', 'Nuxt UI', 'bitcoinjs', 'Prisma'],
    timeframe: '2023',
    repo: 'https://github.com/matijaoe/polenta',
    categories: [Category.projects],
    color: '#FB923C',
  },
  {
    slug: 'bip39-words',
    name: 'BIP39 words',
    description: 'BIP39 word lookup tool.',
    tech: ['SvelteKit', 'TypeScript', 'Tailwind'],
    techPreview: ['SvelteKit', 'Tailwind'],
    timeframe: '2022',
    repo: 'https://github.com/matijaoe/bip39-words',
    url: 'https://bip39-rosy.vercel.app',
    thumbnail: '/projects/btc-tools.webp',
    categories: [Category.hobby],
    color: '#F97315',
  },
  {
    slug: 'bit-complete',
    name: 'Bit Complete',
    description: 'Tool to generate a valid 24th word for a BIP39 seed phrase.',
    tech: ['Vue', 'TypeScript', 'Pico CSS'],
    techPreview: ['Vue', 'ts', 'Pico CSS'],
    timeframe: '2024',
    repo: 'https://github.com/matijaoe/seed-finisher',
    url: 'https://seed-finisher.vercel.app/',
    thumbnail: '/projects/bit-complete.webp',
    categories: [Category.hobby],
    color: '#027FC0',
  },
  {
    slug: 'favicones',
    name: 'Favicônes',
    description: 'Quick and easy way to use any icon as favicon.',
    tech: ['Nuxt', 'UnoCSS', 'iconify'],
    timeframe: '2022',
    repo: 'https://github.com/matijaoe/favicones',
    url: 'https://favicones.vercel.app/',
    thumbnail: '/projects/favicones.webp',
    categories: [Category.hobby],
    color: '#EA580B',
  },
  // {
  //   slug: 'meet-mia',
  //   name: 'MeetMia',
  //   description: 'Cake shop concept project',
  //   tech: ['Vue', 'Vite', 'TypeScript', 'SCSS'],
  //   timeframe: '2021',
  //   repo: 'https://github.com/matijaoe/meet-mia',
  //   url: 'https://meet-mia.surge.sh/',
  //   thumbnail: '/projects/meetmia/thumbnail.webp',
  //   images: [
  //     '/projects/meetmia/01.webp',
  //   ],
  //   categories: [Category.hobby],
  //   color: '#F6AF93',
  // },
  {
    slug: 'comet',
    name: 'Comet',
    description: 'Video streaming platform mockup.',
    tech: ['HTML', 'SCSS', 'JavaScript'],
    timeframe: '2020',
    repo: 'https://github.com/matijaoe/comet',
    url: 'https://comet-blush.vercel.app',
    thumbnail: '/projects/comet.webp',
    categories: [Category.hobby],
    color: '#EA2026',
  },
  {
    wip: true,
    slug: 'brutoneto',
    name: 'Brutoneto',
    description: 'Advanced salary calculator for Croatian employees.',
    tech: ['TypeScript', 'Bun', 'npm'],
    techPreview: ['ts', 'Bun', 'npm'],
    timeframe: '2024',
    repo: 'https://github.com/matijaoe/brutoneto',
    categories: [Category.modules],
  },
  {
    wip: true,
    slug: 'utilipea',
    name: 'Utilipea',
    description: 'Yet another utility library.',
    tech: ['TypeScript', 'Bun', 'Vitest', 'npm'],
    techPreview: ['ts', 'Bun', 'Vitest', 'npm'],
    timeframe: '2023/24',
    repo: 'https://github.com/matijaoe/utilipea',
    categories: [Category.modules],
    color: '#A8B1FF',
  },
  {
    slug: 'vue-ecosystem-snippets',
    name: 'Vue Ecosystem Snippets',
    description: 'Snippets for the modern Vue ecosystem.',
    timeframe: '2023',
    url: 'https://marketplace.visualstudio.com/items?itemName=matijao.vue-nuxt-snippets',
    repo: 'https://github.com/mat2ja/vue-ecosystem-snippets',
    thumbnail: '/projects/vue-ecosystem-snippets.png',
    tech: ['Deno', 'TypeScript', 'VSCode'],
    techPreview: ['Deno', 'ts', 'VSCode'],
    categories: [Category.extensions],
    color: '#1FBE4B',
    maintained: true,
  },
  {
    slug: 'modern-javascript-snippets',
    name: 'Modern JavaScript Snippets',
    description: 'Code snippets for modern JavaScript & TypeScript.',
    timeframe: '2023',
    url: 'https://marketplace.visualstudio.com/items?itemName=matijao.modern-js-snippets',
    repo: 'https://github.com/mat2ja/modern-javascript-snippets',
    thumbnail: '/projects/modern-javascript-snippets.png',
    tech: ['Deno', 'TypeScript', 'VSCode'],
    techPreview: ['Deno', 'ts', 'VSCode'],
    categories: [Category.extensions],
    color: '#E8D44D',
    maintained: true,
  },
  {
    slug: 'url-query-editor',
    name: 'URL Query Editor',
    description: 'Simple but powerful Chrome extension for editing URL query parameters.',
    timeframe: '2023',
    repo: 'https://github.com/matijaoe/url-query-editor',
    thumbnail: '/projects/url-query-editor.webp',
    tech: ['Svelte', 'Tailwind', 'Chromium'],
    categories: [Category.extensions],
    color: '#17B7A6',
  },
  {
    slug: 'pnpm-plugin-zsh',
    name: 'pnpm.plugin.zsh',
    description: 'Oh My Zsh aliases for common pnpm commands.',
    timeframe: '2023',
    repo: 'https://github.com/matijaoe/pnpm.plugin.zsh',
    tech: ['Zsh', 'pnpm'],
    categories: [Category.extensions],
  },
  {
    slug: 'nuxt-starter',
    name: 'Nuxt Uno Starter',
    description: 'Nuxt 3 & UnoCSS starter template.',
    timeframe: '2023',
    repo: 'https://github.com/matijaoe/nuxt-starter',
    url: 'https://the-nuxt-starter.vercel.app/',
    thumbnail: '/projects/nuxt-starter.png',
    tech: ['Nuxt', 'UnoCSS'],
    categories: [Category.templates],
    color: '#01DC82',
    maintained: true,
  },
  {
    slug: 'vue-starter',
    name: 'Vue Uno Starter',
    description: 'Vue & UnoCSS starter template.',
    timeframe: '2023',
    repo: 'https://github.com/matijaoe/vue-starter',
    url: 'https://vue-uno-starter.vercel.app/',
    thumbnail: '/projects/vue-starter.webp',
    tech: ['Vue', 'UnoCSS'],
    categories: [Category.templates],
    color: '#079669',
  },
  {
    slug: 'advent-of-code-template',
    name: 'AoC Template',
    description: 'Automated Advent of Code Template.',
    timeframe: '2023',
    repo: 'https://github.com/matijaoe/advent-of-code',
    tech: ['Bun', 'TypeScript'],
    techPreview: ['Bun', 'ts'],
    categories: [Category.templates],
  },
  {
    slug: 'vue-anu-starter',
    name: 'Vue & Anu Starter',
    description: 'Vue & Anu starter template.',
    timeframe: '2023',
    repo: 'https://github.com/matijaoe/vue-anu-starter',
    url: 'https://vue-anu-starter.vercel.app/',
    tech: ['Vue', 'UnoCSS'],
    categories: [Category.templates],
  },

]

export const useProjects = () => {
  const uniqueCategories = computed(() => {
    const categorySet = new Set<CategorySlug>()
    projects.forEach((project) => {
      project.categories.forEach((category) => {
        categorySet.add(category)
      })
    })

    return Array.from(categorySet).map((category) => {
      return {
        label: categories[category],
        value: category,
      }
    })
  })

  const getProduct = (slug: string): Project | undefined => {
    return projects.find((project) => project.slug === slug)
  }

  const getProjectsByCategory = (category: CategorySlug): Project[] => {
    return projects.filter((project) => project.categories.includes(category))
  }

  return {
    projects,
    getProduct,
    getProjectsByCategory,
    uniqueCategories,
  }
}
