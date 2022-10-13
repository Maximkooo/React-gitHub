import React from 'react';
import './App.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div className="center">
        <h1>Our Newsletter</h1>
        <form>
          <div className="inputbox">
            <input
              name="email"
              type="text"
              value={this.props.email}
              onChange={this.props.handleInputChange}
            />
            <span>Email</span>
            <h4>{this.props.validEmail ? '' : 'Not correct Email'}</h4>
          </div>

          <div className="inputbox">
            <input
              name="password"
              type="password"
              value={this.props.password}
              onChange={this.props.handleInputChange}
            />
            <span>Password</span>
            <h4>{this.props.validPassword ? '' : 'Not correct Password'}</h4>
          </div>

          <div className="inputbox">
            <input
              name="firstName"
              type="text"
              value={this.props.firstName}
              onChange={this.props.handleInputChange}
            />
            <span>First Name</span>
            <h4>{this.props.validFirstName ? '' : 'Not correct Name'}</h4>
          </div>

          <div className="inputbox">
            <input
              name="lastName"
              type="text"
              value={this.props.lastName}
              onChange={this.props.handleInputChange}
            />
            <span>Last Name</span>
            <h4>{this.props.validLastName ? '' : 'Not correct Name'}</h4>
          </div>

          <div className="inputbox">
            <input
              type="button"
              value="submit"
              disabled={!(this.props.validEmail &&
                this.props.validPassword &&
                this.props.validFirstName &&
                this.props.validLastName)}
              onClick={this.props.handleButtonClick}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
