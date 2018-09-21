import React from "react";

const Labels = (props) =>{
  return (
    <div className="order labels">
      <div className="order__detail toggle"></div>

      <div className="order__detail name"><p>name</p></div>

      <div className="order__detail description"><p>description</p></div>

      <div className="order__detail od"><p>order date</p></div>

      <div className="order__detail dd"><p>deliver date</p></div>

      <div className="order__detail total"><p>total</p></div>

      <div className="order__detail symbol"><p>symbol</p></div>
    </div>
    );
}

export default Labels;
