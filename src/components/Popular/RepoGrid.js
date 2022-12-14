import { memo } from "react";
import { useSelector } from "react-redux";

const RepoGrid = memo((props) => {
  const repos = useSelector(state => state.popularReducer.repos);

  return(
    <>
    {props.loader === true ? <div className="loader"></div> :
      <ul className="popular-list">
        {repos.map((repo, index) => {
          return(
            <li key={repo.name} className="popular-item">
              <div className="popular-rank">#{index + 1}</div>
              <ul className="space-list-items">
                <li>
                  <img src={repo.owner.avatar_url} alt="Avatar" className="avatar" />
                </li>
                <li>
                  <a href={repo.html_url} target='_blank' rel="noreferrer">{repo.name}</a>
                </li>
                <li>
                  @{repo.owner.login}
                </li>
                <li>
                {repo.stargazers_count} stars
                </li>
              </ul>
            </li>
          )
        })}
      </ul>
    }
    </>
  )
})

export default RepoGrid;