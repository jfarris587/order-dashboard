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

  login = () => {
    var form = document.getElementById("login").elements;
    var username = form[0].value;
    var password = form[1].value;

    if(username.length === 0 || password.length ===0){
      alert('please fill out all fields.');
    }
    else{
      this.props.dispatch(loginApp(username, password));
    }
  }

  signup = () => {
    var form = document.getElementById("login").elements;
    var username = form[0].value;
    var email = form[1].value;
    var password = form[2].value;
    var confirm = form[3].value;

    if(username.length === 0 || email.length ===0 || password.length ===0 || confirm.length ===0){
      alert('please fill out all fields.');
    }
    else if(password !== confirm){
      alert('passwords do not match.');
    }
    else{
          this.props.dispatch(signUpApp(username, email, password));
    }
  }

  changeMode = (i) => {
   var tempState = {...this.state};
   tempState.mode = i;
   this.setState(tempState);
  }

  render(){
    var button = "Sign in";
    if(this.state.mode === 1){
      button = "Sign up";
    }

    return (
      <div className="login">

        <Toggle
          mode={this.state.mode}
          changeMode={this.changeMode}
        />

        <form id="login">

          <h1>Dashboard {button}</h1>

          <input className="input" required type="text" placeholder="Username"></input>

          {this.state.mode === 1 && <input className="input" required type="email" placeholder="Email"></input>}

          <input className="input" required type="password" placeholder="Password"></input>

          {this.state.mode === 1 && <input className="input" required type="password" placeholder="Confirm Password"></input>}

          {this.state.mode === 0 && <button type="button" className="button-secondary" onClick={this.login}>Sign in</button>}


          {this.state.mode === 1 && <button type="button" className="button-secondary" onClick={this.signup}>Sign up</button>}

        </form>
      </div>
    );
  }
}

export default connect()(Login);
