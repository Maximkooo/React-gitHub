import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUser, getUserRepos } from "../../api";
import PlayerPreview from "./PlayerPreview";

const Results = () => {
  const [playerOneFollowers, setPlayerOneFollowers] = useState(0)
  const [playerOneStarsRepos, setPlayerOneStarsRepos] = useState(0)
  const [playerOneResult, setPlayerOneResult] = useState(0)
  const [playerOneImage, setPlayerOneImage] = useState('')
  const [playerOneName, setPlayerOneName] = useState('')

  const [playerTwoFollowers, setPlayerTwoFollowers] = useState(0)
  const [playerTwoStarsRepos, setPlayerTwoStarsRepos] = useState(0)
  const [playerTwoResult, setPlayerTwoResult] = useState(0)
  const [playerTwoImage, setPlayerTwoImage] = useState('')
  const [playerTwoName, setPlayerTwoName] = useState('')

  const [loader, setLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const playerOne = getSearchParams('playerOneName')
    const playerTwo = getSearchParams('playerTwoName')
    const players = [playerOne, playerTwo]
    setPlayerOneImage(`https://github.com/${playerOne}.png?size=200`)
    setPlayerTwoImage(`https://github.com/${playerTwo}.png?size=200`)
    for (let index = 0; index < players.length; index++) {
      getUserData(players[index], index)
      getUserStarsRepos(players[index], index)
    }
  },[])

  useEffect(() => {
    setPlayerOneResult(playerOneStarsRepos + playerOneFollowers)
    setPlayerTwoResult(playerTwoStarsRepos + playerTwoFollowers)
    setLoader(false)
  },[playerOneStarsRepos, playerTwoStarsRepos])

  const getSearchParams = (player) => {
    const searchParams = new URLSearchParams(location.search)
    return searchParams.get(player)
  }

  const getUserData = (player, index) => {
    getUser(player)
      .then(data => {
        if (index === 0) {
          setPlayerOneFollowers(data.followers)
          setPlayerOneName(data.login)
        }
        else {
          setPlayerTwoFollowers(data.followers)
          setPlayerTwoName(data.login)
        }
      })
      .catch(error => {
        console.log(error);
    })
  }
  const getUserStarsRepos = (player, index) => {
    getUserRepos(player)
      .then(data => {
        data.forEach((item)=> {
          index === 0 ?
          setPlayerOneStarsRepos(prevTest => prevTest + item.stargazers_count) :
          setPlayerTwoStarsRepos(prevTest => prevTest + item.stargazers_count)
        })
      })
      .catch(error => {
        console.log(error);
    })
  }

  return (
    <div className="row">
      { loader === true ? <div className="loader"></div> :
        playerOneResult >= playerTwoResult ?
          <>
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}
            >
              <h4 className="winner">{playerOneResult}</h4>
              <h1 className="winner">Winner</h1>
            </PlayerPreview>

            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
            >
              <h4 className="loser">{playerTwoResult}</h4>
              <h1 className="loser">Loser</h1>
            </PlayerPreview>
          </> :
          <>
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
            >
              <h4 className="winner">{playerTwoResult}</h4>
              <h1 className="winner">Winner</h1>
            </PlayerPreview>

            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}
            >
              <h4 className="loser">{playerOneResult}</h4>
              <h1 className="loser">Loser</h1>
            </PlayerPreview>
          </>
      }
    </div>
  )
}
export default Results;