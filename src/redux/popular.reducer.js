import { GET_REPOS_FAILURE, GET_REPOS_LOADING, GET_REPOS_SUCCESS, SET_LANGUAGE } from "./popular.constants";


const initialState = {
  selectedLanguage: 'All',
  loading: false,
  repos: [],
  error: null
}

export const popularReducer = (store = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...store,
        selectedLanguage: action.payload
      }
    case GET_REPOS_LOADING:
      return {
        ...store,
        loading: true,
        repos: [],
        error: null
      }

    case GET_REPOS_SUCCESS:
      return {
        ...store,
        loading: false,
        repos: action.payload
      }

    case GET_REPOS_FAILURE:
      return {
        ...store,
        loading: true,
        error: action.payload
      }

    default:
      return store;
  }
}