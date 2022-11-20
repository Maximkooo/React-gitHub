import { GET_USER_INFO, SET_USER_INFO_RESET, GET_WINNER_INFO } from "./battle.constants";

export const getUserInfo = (id, payload) => ({
  type: GET_USER_INFO,
  id: id,
  payload
})

export const setUserInfoReset = (id) => ({
  type: SET_USER_INFO_RESET,
  id
})

export const getWinnerInfo = (payload) => ({
  type: GET_WINNER_INFO,
  payload
})


