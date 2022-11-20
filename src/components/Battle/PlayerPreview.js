const PlayerPreview = (props) => (
  <div>
    <div className="column">
      <img src={props.avatar} alt='avatar' className="avatar" />
      <h2 className="username">{props.username}</h2>
    </div>
    {props.children}
  </div>
)

export default PlayerPreview;