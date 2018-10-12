import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginApp } from '../../redux/actions/app';
import { signUpApp } from '../../redux/actions/app';
import Toggle from '../components/Toggle.jsx'

export class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      mode: 0
    };
  }

  login = (e) => {
    e.preventDefault();
    var form = document.getElementById("login").elements;
    var username = form[0].value;
    var password = form[1].value;

    this.props.dispatch(loginApp(username, password));
  }

  signup = (e) => {
    e.preventDefault();
    var form = document.getElementById("login").elements;
    var username = form[0].value;
    var email = form[1].value;
    var password = form[2].value;
    var confirm = form[3].value;

    if(password !== confirm){
      alert('passwords do not match.');
    }
    else{
      this.props.dispatch(signUpApp(username, email, password));
      var tempState = {...this.state};
      tempState.mode = 0;
      this.setState(tempState);
    }
  }

  changeMode = (i) => {
   var tempState = {...this.state};
   tempState.mode = i;
   this.setState(tempState);
  }

  render(){
    var button = "Sign in";
    var submit = this.login;
    if(this.state.mode === 1){
      button = "Sign up";
      submit = this.signup;
    }

    return (
      <div className="login">

      <Toggle
        mode={this.state.mode}
        changeMode={this.changeMode}
      />

      <form id="login" onSubmit={submit}>
        <h1>Dashboard {button}</h1>

        <input className="input" required type="text" placeholder="Username"></input>

        {this.state.mode === 1 && <input className="input" required type="email" placeholder="Email"></input>}

        {this.state.mode === 1 && <input className="input" required type="email" placeholder="First Name"></input>}


        {this.state.mode === 1 && <input className="input" required type="email" placeholder="LastName"></input>}


        <input className="input" required type="password" placeholder="Password"></input>

        {this.state.mode === 1 && <input className="input" required type="password" placeholder="Confirm Password"></input>}

        {this.state.mode === 0 && <button type="submit" className="button-secondary">Sign in</button>}

        {this.state.mode === 1 && <button type="submit" className="button-secondary">Sign up</button>}
        </form>
      </div>
    );
  }
}

export default connect()(Login);
