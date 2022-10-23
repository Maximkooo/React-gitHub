import axios from "axios"

export const fetchPopularRepos = (language) => {
  return axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
  .then(response => response.data.items)
}