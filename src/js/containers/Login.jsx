import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginApp } from '../../redux/actions/app';
import Toggle from '../components/Toggle.jsx'

export class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      mode: 1
    };
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


          <button type="button" className="button-secondary" onClick={() => this.props.dispatch(loginApp())}>{button}</button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
