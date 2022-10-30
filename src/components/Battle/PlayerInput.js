import { useState } from "react";

const PlayerInput = (props) => {
  const [username, setUserName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(props.id, username)
  }

  return (
    <form className="column" onSubmit={handleSubmit}>
      <label htmlFor={props.id} className="header">{props.label}</label>
      <input
        id={props.id}
        type="text"
        placeholder="GitHub Username"
        autoComplete="off"
        value={username}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button className="button" disabled={!username} type='submit'>Submit</button>
    </form>
  )
}
export default PlayerInput;