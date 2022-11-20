import { GET_USER_INFO, SET_USER_INFO_RESET, GET_WINNER_INFO } from "./battle.constants";

const initialState = {
  playerOneName: '',
  playerTwoName: '',
  playerOneImage: '',
  playerTwoImage: '',
  winner: null,
  loser: null,
  loader: false
}

export const battleReducer = (store = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      if (action.id === 'playerOne') {
        return {
          ...store,
          playerOneName: action.payload,
          playerOneImage: `https://github.com/${action.payload}.png?size=200`
        }
      }
      else{
        return {
          ...store,
          playerTwoName: action.payload,
          playerTwoImage: `https://github.com/${action.payload}.png?size=200`
        }
      }

      case SET_USER_INFO_RESET:
        if (action.id === 'playerOne') {
          return {
            ...store,
            playerOneName: '',
            playerOneImage: ''
          }
        }
        else{
          return {
            ...store,
            playerTwoName: '',
            playerTwoImage: ''
          }
        }

      case GET_WINNER_INFO:
        return{
          ...store,
          winner: action.payload[0],
          loser: action.payload[1],
          loader: true
        }

    default:
      return store;
  }
}