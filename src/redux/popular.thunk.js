import { getReposFailure, getReposLoading, getReposSuccess, setLanguage } from "./popular.actions"
import { fetchPopularRepos } from "../api";

export const getRepos = (language) => async (dispatch) => {
  await dispatch(setLanguage(language));
  await dispatch(getReposLoading());

  try {
    const repos = await fetchPopularRepos(language)
    if (repos.length) {
      dispatch(getReposSuccess(repos))
    }
  }
  catch (error) {
    await dispatch(getReposFailure(repos))
  }
}