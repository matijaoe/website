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
  categories: Category[]
}

export type Category = 'projects' | 'play' | 'extensions' | 'starters'
