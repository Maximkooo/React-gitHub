import { getUserInfo, setUserInfoReset, getWinnerInfo } from "./battle.actions"
import { startBattle } from "../api.js"

export const getUser = (id, player) => async (dispatch) => {
  await dispatch(getUserInfo(id, player));
}

export const setUserReset = (id) => async (dispatch) => {
  await dispatch(setUserInfoReset(id));
}

export const getWinner = (players) => async (dispatch) => {
  try {
    const winner = await startBattle(players)
    if (winner.length) {
      dispatch(getWinnerInfo(winner))
    }
  }
  catch (error) {
    console.log(error);
  }
}