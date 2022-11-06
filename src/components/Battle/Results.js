import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {startBattle} from "../../api.js"

import PlayerPreview from "./PlayerPreview";

const Results = () => {
  const [winner, setWinner] = useState(null)
  const [loser, setLoser] = useState(null)
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    startBattle([searchParams.get('playerOneName'), searchParams.get('playerTwoName')])
      .then(([winner, loser]) => {
        setWinner(winner);
        setLoser(loser);
        setLoader(true)
      })
  },[location.search])


  return (
    <div className="row">
      { loader ?
        <>
          <PlayerPreview
            avatar={winner.profile.avatar_url}
            username={winner.profile.login}
          >
            <h3 className="score_title">
              Score: <span className="score">{winner.score}</span>
            </h3>
          </PlayerPreview>

          <PlayerPreview
            avatar={loser.profile.avatar_url}
            username={loser.profile.login}
          >
            <h3 className="score_title">
              Score: <span className="score">{loser.score}</span>
            </h3>
          </PlayerPreview>
        </>
        : null
      }
      
    </div>
  )
}
export default Results;