export type Project = {
  slug: string
  name: string
  description: string
  descriptionShort?: string
  tech: string[]
  techPreview?: string[]
  timeframe: string
  repo?: string
  url?: string
  thumbnail?: string
  images?: string[]
  categories: CategorySlug[]
  color?: string
  // states
  wip?: boolean
}

export const Category = {
  projects: 'projects',
  hobby: 'hobby',
  modules: 'modules',
  extensions: 'extensions',
  templates: 'starts',
  collections: 'collections',
} as const

export type CategorySlug = typeof Category[keyof typeof Category]
