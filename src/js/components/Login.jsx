import React from "react";

const Login = (props) =>{


  return (
    <div className="login container">

      <form>
        <h1>Dashboard Login</h1>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <button className="button" onClick={props.login}>Login</button>
      </form>


    </div>
  );
}

export default Login;
