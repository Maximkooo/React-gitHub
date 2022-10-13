import React from 'react';
import './App.css';
import Form from './Form';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      firstName : '',
      lastName: '',
      validEmail: false,
      validPassword: false,
      validFirstName: false,
      validLastName: false,
    }
  }
  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    if (event.target.name === 'email') {
      this.validEmail(event.target.value)
    }
    else if (event.target.name === 'password') {
      this.validPassword(event.target.value)
    }
    else{
      this.validString(event.target.name, event.target.value)
    }
  }

  validEmail = (email) =>{
    var valid = /^\S+@\S+\.\S+$/;
    return valid.test(email) ?
      this.setState({validEmail : true}) :
      this.setState({validEmail : false})
  }

  validPassword = (password) => {
    var valid =
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      password.length > 4 &&
      password.length < 10;
    return valid ?
      this.setState({validPassword : true}) :
      this.setState({validPassword : false})
  }

  validString = (name, string) => {
    var valid =
      /^[A-Z]+$/i.test(string) &&
      string.length > 2;
    if (name === 'firstName') {
      return valid ?
        this.setState({validFirstName : true}) :
        this.setState({validFirstName : false})
    }
    else{
      return valid ?
      this.setState({validLastName : true}) :
      this.setState({validLastName : false})
    }
  }

  handleButtonClick = (event) => {
    return event ? alert('You click button'): ''
  }


  render(){
    return (
      <>
        <Form
          email={this.state.email}
          validEmail={this.state.validEmail}
          password={this.state.password}
          validPassword={this.state.validPassword}
          firstName={this.state.firstName}
          validFirstName={this.state.validFirstName}
          lastName={this.state.lastName}
          validLastName={this.state.validLastName}
          handleButtonClick={this.handleButtonClick}
          handleInputChange={this.handleInputChange}
        />
      </>
    );
  }
}

export default App;
