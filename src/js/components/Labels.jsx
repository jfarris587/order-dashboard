import React from "react";

const Labels = (props) =>{
  return (
    <div className="labels">
      <div className="labels__detail toggle"></div>

      <div className="labels__detail name"><p>name</p></div>

      <div className="labels__detail description"><p>description</p></div>

      <div className="labels__detail od"><p>order date</p></div>

      <div className="labels__detail dd"><p>deliver date</p></div>

      <div className="labels__detail total"><p>total</p></div>

      <div className="labels__detail symbol"><p>status</p></div>
    </div>
    );
}

export default Labels;
