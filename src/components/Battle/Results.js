import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUser, getUserRepos } from "../../api";
import PlayerPreview from "./PlayerPreview";

const Results = () => {
  const [playerOneFollowers, setPlayerOneFollowers] = useState(null)
  const [playerOneStarsRepos, setPlayerOneStarsRepos] = useState([])
  const [playerOneResult, setPlayerOneResult] = useState(null)
  const [playerOneImage, SetPlayerOneImage] = useState('')
  const [playerOneName, SetPlayerOneName] = useState('')

  const [playerTwoFollowers, setPlayerTwoFollowers] = useState(null)
  const [playerTwoStarsRepos, setPlayerTwoStarsRepos] = useState([])
  const [playerTwoResult, setPlayerTwoResult] = useState(null)
  const [playerTwoImage, SetPlayerTwoImage] = useState('')
  const [playerTwoName, SetPlayerTwoName] = useState('')

  const [loader, setLoader] = useState(true);
  const location = useLocation();
  const countInArray = arr => arr.reduce((a, b) => a + b, 0);

  useEffect(() => {
    const playerOne = getSearchParams('playerOneName')
    const playerTwo = getSearchParams('playerTwoName')
    const players = [playerOne, playerTwo]
    SetPlayerOneImage(`https://github.com/${playerOne}.png?size=200`)
    SetPlayerTwoImage(`https://github.com/${playerTwo}.png?size=200`)
    for (let index = 0; index < players.length; index++) {
      getUserData(players[index], index)
      getUserStarsRepos(players[index], index)
    }
  },[location])

  useEffect(() => {
    if (playerOneStarsRepos.length) {
      setPlayerOneResult(countInArray(playerOneStarsRepos) + playerOneFollowers)
      setLoader(false)
    }
  },[playerOneStarsRepos])

  useEffect(() => {
    if (playerTwoStarsRepos.length) {
      setPlayerTwoResult(countInArray(playerTwoStarsRepos) + playerTwoFollowers)
      setLoader(false)
    }
  },[playerTwoStarsRepos])

  const getSearchParams = (player) => {
    const searchParams = new URLSearchParams(location.search)
    return searchParams.get(player)
  }

  const getUserData = (player, index) => {
    getUser(player)
      .then(data => {
        if (index === 0) {
          setPlayerOneFollowers(data.followers)
          SetPlayerOneName(data.login)
        }
        else {
          setPlayerTwoFollowers(data.followers)
          SetPlayerTwoName(data.login)
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
          setPlayerOneStarsRepos(oldArray => [...oldArray, item.stargazers_count]) :
          setPlayerTwoStarsRepos(oldArray => [...oldArray, item.stargazers_count])
        })
      })
      .catch(error => {
        console.log(error);
    })
  }

  return (
    <div className="row">
      { loader === true ? <div className="loader"></div> : playerOneResult > playerTwoResult ?
        <>
          <PlayerPreview
            avatar={playerOneImage}
            username={playerOneName}
          >
            <h1 className="winner">Winner</h1>
          </PlayerPreview>

          <PlayerPreview
            avatar={playerTwoImage}
            username={playerTwoName}
          >
            <h1 className="loser">Loser</h1>
          </PlayerPreview>
        </> :
        <>
        <PlayerPreview
            avatar={playerTwoImage}
            username={playerTwoName}
          >
            <h1 className="winner">Winner</h1>
          </PlayerPreview>

          <PlayerPreview
            avatar={playerOneImage}
            username={playerOneName}
          >
            <h1 className="loser">Loser</h1>
          </PlayerPreview>
        </>
      }
    </div>
  )
}
export default Results;