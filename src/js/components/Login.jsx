import React from "react";
import { connect } from 'react-redux';
import { loginApp } from '../../redux/actions/app';

const Login = (props) =>{
  return (
    <div className="login container">
      <form id="login">
        <h1>Dashboard Login</h1>
        <input required type="text" placeholder="Username"></input>
        <input required type="password" placeholder="Password"></input>
        <button type="button" className="button" onClick={() => props.dispatch(loginApp())}>Login</button>
      </form>
    </div>
  );
}

export default connect()(Login);
