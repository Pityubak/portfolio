import { query } from "./query"
import { CacheProps } from "./types"

const endpoint = "https://api.codersrank.io/v2/users/Pityubak/"
const badgesEndpoint = endpoint + "badges"
const langEndpoint = endpoint + "languages"

const storedItems =
  typeof localStorage !== "undefined" && localStorage.getItem("my_cache")

const cache: CacheProps = storedItems
  ? JSON.parse(storedItems)
  : {
      user: null,
      badges: [],
      score: 0,
      position: 0,
      langs: null,
    }
if (!storedItems) {
  Promise.all([query(endpoint), query(badgesEndpoint), query(langEndpoint)])
    .then(data => {
      cache.user = data[0]
      cache.badges = data[1]?.badges
      cache.langs = data[2]
      cache.score = Math.floor(data[0]?.total_score)
      cache.position = Math.ceil(
        100 / (data[0]?.total_users / data[0]?.position)
      )
      typeof localStorage !== "undefined" &&
        localStorage.setItem("my_cache", JSON.stringify(cache))
    })
    .catch(e => {
      console.error("Error", e)
    })
}

export default cache
