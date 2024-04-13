export type Project = {
  slug: string
  name: string
  description: string
  descriptionShort?: string
  tags: string[]
  timeframe: string
  repo?: string
  url?: string
  wip?: boolean
  thumbnail?: string
  images?: string[]
  categories: CategorySlug[]
  color?: string
  featured?: boolean
}

export const Category = {
  projects: 'projects',
  hobby: 'hobby',
  modules: 'modules',
  extensions: 'extensions',
  templates: 'starts',
} as const

export type CategorySlug = typeof Category[keyof typeof Category]
