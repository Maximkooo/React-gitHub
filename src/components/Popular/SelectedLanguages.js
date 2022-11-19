import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../../redux/popular.thunk";

const languages = ['All', 'Javascript', 'Ruby', 'CSS', 'Python', 'Java'];

const SelectedLanguages = (props) => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(state => state.popularReducer.selectedLanguage);

  useEffect(() => {
    dispatch(getRepos(selectedLanguage))
  }, [])

  const onSelectLanguage = selectLanguage => dispatch(getRepos(selectLanguage))

  return (
    <ul className="languages">
      {languages.map((language, index) => {
        return (
          <li
            key={index}
            style={language === selectedLanguage ? { color: 'red' } : null}
            onClick={() => onSelectLanguage(language)}
          >{language}</li>
        )
      })}
    </ul>
  );
}
export default SelectedLanguages;