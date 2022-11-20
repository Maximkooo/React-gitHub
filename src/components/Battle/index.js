
import { Link } from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import { useSelector, useDispatch } from "react-redux";
import { setUserReset } from "../../redux/battle.thunk";

const Battle = () => {
  const dispatch = useDispatch();
  const playerOneName = useSelector(state => state.battleReducer.playerOneName);
  const playerOneImage = useSelector(state => state.battleReducer.playerOneImage);
  const playerTwoName = useSelector(state => state.battleReducer.playerTwoName);
  const playerTwoImage = useSelector(state => state.battleReducer.playerTwoImage);

  const handleReset = (id) =>{
    dispatch(setUserReset(id))
  }

  return (
    <div>
      <div className="row">
        {!playerOneImage ?
          <PlayerInput
            id='playerOne'
            label='Player 1'
          /> :
          <PlayerPreview
            avatar={playerOneImage}
            username={playerOneName}
          >
            <button className="reset" onClick={() => handleReset('playerOne')}>Reset</button>
          </PlayerPreview>
        }


        {!playerTwoImage ?
          <PlayerInput
            id='playerTwo'
            label='Player 2'
          /> :
          <PlayerPreview
            avatar={playerTwoImage}
            username={playerTwoName}
          >
            <button className="reset" onClick={() => handleReset('playerTwo')}>Reset</button>
          </PlayerPreview>
        }
      </div>
      {playerOneName && playerTwoName &&
        <Link
          className="button"
          to={{
            pathname: '/battle/results',
            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
          }}
          >
          Battle
        </Link>
      }
    </div>
  );
}
export default Battle;