import React from 'react';
import './App.css';
import Post from './Post';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isOn: false,
      list: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange() {
    this.setState({isOn : !this.state.isOn})

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => this.setState({list : json}));
  }


  render(){
    return (
      <div className='box'>
	      <button onClick={this.handleChange} className='button button-main'>Posts</button>
        {this.state.isOn ? <div> {this.state.list.map((x, i) =>
          <Post post={x} key={i} />
        )} </div> : ''}
      </div>
    );
  }
}

export default App;
