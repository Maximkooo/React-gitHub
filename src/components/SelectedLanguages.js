import { memo } from "react";

const SelectedLanguages = memo((props) => {
  const languages = ['All', 'Javascript', 'Ruby', 'CSS', 'Python', 'Java'];

  return (
    <ul className="languages">
      {languages.map((language, index) => {
        return (
          <li
            key={index}
            style={language === props.selectedLanguage ? {color: 'red'} : null}
            onClick={() => props.onSelectLanguage(language)}
          >{language}</li>
        )
      })}
    </ul>
  );
})
export default SelectedLanguages;