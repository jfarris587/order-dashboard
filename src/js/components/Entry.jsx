import React from "react";

const Entry = (props) =>{
  return (
    <div className="entry">
      <div className="entry__detail name"><p>name:</p></div>

      <div className="entry__detail description"><p>description:</p></div>

      <div className="entry__detail od"><p>order date:</p></div>

      <div className="entry__detail dd"><p>deliver date:</p></div>

      <div className="entry__detail total"><p>total:</p></div>

      <div className="entry__detail symbol"><p>symbol:</p></div>
    </div>
  );
}

export default Entry;
