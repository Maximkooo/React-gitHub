import React from 'react';
import './App.css';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: 'Stepan',
      age: 25,
      isShow: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
   handleChange() {
    this.setState({name: 'Mykola', age: 30, isShow: !this.state.isShow})
  }

  render(){
    return (
      <div>
        { this.state.isShow ?
          <p> Name: {this.state.name}, age: {this.state.age} </p> :
          ''
        }
	      <button onClick={this.handleChange}>{ !this.state.isShow ? 'показать' : 'скрыть'}</button>
      </div>
    );
  }
}

export default App;
