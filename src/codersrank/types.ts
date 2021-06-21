export interface BadgeProps {
  language: string
  location_name: string
  rank: number
}
export interface LangProps {
  country_all: number
  country_rank: number
  score: number
  self_url: string
  world_wide_all: number
  world_wide_rank: number
}

export interface CacheProps {
  user: Object
  badges: Array<BadgeProps> | null
  score: number
  position: number
  langs: Object
}
