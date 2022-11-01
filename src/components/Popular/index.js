import SelectedLanguages from './SelectedLanguages.js';
import { useState, useEffect } from 'react';
import {fetchPopularRepos} from '../../api.js'
import RepoGrid from './RepoGrid.js';
import { useSearchParams } from "react-router-dom";

const Popular = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedLanguage, setSelectedLanguage] = useState(searchParams.get("lang") || 'All');
  const [repos, setRepos] = useState([]);
  const [loader, setLoader] = useState(true);
  const [lastRequestTime, setLastRequestTime] = useState(0);

  useEffect(() => {
    if (!repos.length) {
      fetchRepos(searchParams.get("lang") ? searchParams.get("lang") : selectedLanguage)
    }
    if (searchParams.get("lang") !== selectedLanguage) {
      setSearchParams({ lang: selectedLanguage });
    }
  });

  const onSelectLanguage = (language) => {
    setSelectedLanguage(language)
    fetchRepos(language)
  }

  const fetchRepos = (data) => {
    const currentTime = new Date().getTime()/1000
    if ((currentTime - lastRequestTime) > 2) {
      setLoader(true)
      setLastRequestTime(currentTime);
      fetchPopularRepos(data)
        .then(data => {
          setRepos(data)
          setLoader(false)
        })
        .catch(error => {
          console.log(error);
      })
    }
  }

  return (
    <>
      <SelectedLanguages
        selectedLanguage={selectedLanguage}
        onSelectLanguage={onSelectLanguage}
      />
      <RepoGrid
        repos={repos}
        loader={loader}
      />
    </>
  );
}
export default Popular;