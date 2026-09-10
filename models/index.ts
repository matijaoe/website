export type Project = {
  slug: string
  name: string
  description: string
  tags: string[]
  /**
   * Single year (`'2024'`) or a range (`'2023/24'`).
   * A trailing em dash (`'2024—'`) marks a project that's still being updated.
   * Only worth it for ones that started in an earlier year — a current-year
   * project already reads as ongoing.
   */
  timeframe: string
  repo?: string
  url?: string
  /**
   * Which link the card opens. Defaults to the repo; set to 'url' when the
   * live app or store listing is the front door (usable side projects,
   * anything distributed through a store). The other link becomes the pill.
   */
  primary?: 'repo' | 'url'
  thumbnail?: string
  categories: CategorySlug[]
  color?: string
  // states
  wip?: boolean
}

export const Category = {
  projects: 'projects',
  hobby: 'hobby',
  bigger: 'bigger',
  modules: 'modules',
  extensions: 'extensions',
  templates: 'starts',
  collections: 'collections',
} as const

export type CategorySlug = typeof Category[keyof typeof Category]
