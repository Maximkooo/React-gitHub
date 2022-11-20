import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWinner } from "../../redux/battle.thunk";
import PlayerPreview from "./PlayerPreview";

const Results = () => {
  const winner = useSelector(state => state.battleReducer.winner);
  const loser = useSelector(state => state.battleReducer.loser);
  const loader = useSelector(state => state.battleReducer.loader);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    dispatch(getWinner([searchParams.get('playerOneName'), searchParams.get('playerTwoName')]))
  }, [])


  return (
    <div className="row">
      {loader ?
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