export type FeatureProject = {
  id: number
  name: string
  slogan: string
  image: string
}

export type Stat = {
  id: number
  title: string
  slug: string
  count: number
  image: string
}

export type ProjectCategory = {
  id: number
  title: string
  slug: string
  description: string
}

export type Project = {
  id: number
  title: string
  slug: string
  address: string
  image: string
  category: string
}
