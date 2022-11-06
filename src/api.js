import axios from "axios"

export const fetchPopularRepos = (language) => {
  return axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
  .then(response => response.data.items)
}

const handleError = (error) => console.log(error);

const getProfile = (username) => {
  return axios.get(`https://api.github.com/users/${username}`)
  .then(user => user.data)
}

const getRepos = (username) => {
  return axios.get(`https://api.github.com/users/${username}/repos`)
  .then(repos => repos.data)
}
const getStarCount = (repos) => {
  return repos.reduce((acc, repo) => {
    return acc + repo.stargazers_count;
  }, 0)
}
const calculateScore = (profile, repos) => {
  const followers = profile.followers
  const totalStars = getStarCount(repos)
  return followers + totalStars
}

const getUserData = (username) => {
  return Promise.all([
    getProfile(username),
    getRepos(username)
  ])
    .then(([profile, repos]) => {
      return {
        profile: profile,
        score: calculateScore(profile, repos)
      }
    })
}

 const sortPlayers = (player) =>{
  return player.sort((a, b) => b.score - a.score)
 }

 export const startBattle = (players) => {
  return Promise.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError)
 }