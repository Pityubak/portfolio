import { query } from "./query"
import { CacheProps } from "./types"

const endpoint = "https://api.codersrank.io/v2/users/Pityubak/"
const badgesEndpoint = endpoint + "badges"
const langEndpoint = endpoint + "languages"

const cache: CacheProps = {
  user: {},
  badges: null,
  score: 0,
  position: 0,
  langs: {},
}
Promise.all([query(endpoint), query(badgesEndpoint), query(langEndpoint)])
  .then(data => {
    cache.user = data[0]
    cache.badges = data[1].badges
    cache.langs = data[2]
    //.filter((badge:BadgeProps) => badge.rank < 100)
    cache.score = Math.floor(data[0].total_score)
    cache.position = Math.ceil(100 / (data[0].total_users / data[0].position))
    console.log("User", data[0])
    console.log("Badges", data[1].badges)
    console.log("Langs", data[2])
  })
  .catch(e => {
    console.error("Error", e)
  })

export default cache
