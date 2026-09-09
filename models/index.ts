export type Project = {
  slug: string
  name: string
  description: string
  descriptionShort?: string
  tags: string[]
  tagsPreview?: string[]
  /**
   * Single year (`'2024'`) or a range (`'2023/24'`).
   * A trailing em dash (`'2024—'`) marks a project that's still being updated.
   * Only worth it for ones that started in an earlier year — a current-year
   * project already reads as ongoing.
   */
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
  competition: 'competition',
  modules: 'modules',
  extensions: 'extensions',
  templates: 'starts',
  collections: 'collections',
} as const

export type CategorySlug = typeof Category[keyof typeof Category]
