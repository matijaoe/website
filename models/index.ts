export type Project = {
  slug: string
  name: string
  description: string
  tags: string[]
  year: number
  repo?: string
  url?: string
  wip?: boolean
  thumbnail?: string
  images?: string[]
  categories: CategorySlug[]
}

export const Category = {
  projects: 'projects',
  play: 'playground',
  extensions: 'extensions',
  templates: 'starts',
} as const

export type CategorySlug = typeof Category[keyof typeof Category]
