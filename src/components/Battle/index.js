import { useState } from "react";
import { Link } from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";

const Battle = () => {
  const [playerOneName, SetPlayerOneName] = useState('')
  const [playerTwoName, SetPlayerTwoName] = useState('')
  const [playerOneImage, SetPlayerOneImage] = useState('')
  const [playerTwoImage, SetPlayerTwoImage] = useState('')

  const handleSubmit = (id, username) => {
    if (id === 'playerOne') {
      SetPlayerOneName(username)
      SetPlayerOneImage(`https://github.com/${username}.png?size=200`)

    }
    else{
      SetPlayerTwoName(username)
      SetPlayerTwoImage(`https://github.com/${username}.png?size=200`)
    }
  }

  const handleReset = (id) =>{
    if (id === 'playerOne') {
      SetPlayerOneName('')
      SetPlayerOneImage('')

    }
    else{
      SetPlayerTwoName('')
      SetPlayerTwoImage('')
    }
  }

  return (
    <div>
      <div className="row">
        {!playerOneImage ?
          <PlayerInput
            id='playerOne'
            label='Player 1'
            onSubmit={handleSubmit}
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
            onSubmit={handleSubmit}
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