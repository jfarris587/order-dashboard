import React from "react";

const Entry = (props) =>{
  var expanded = "";
  if(props.entryExpanded === true){
    expanded = " expanded";
  }

  return (
    <form className={"entry" + expanded} id="entry">
      <div className="entry__detail name"><p>Client:</p><input placeholder="First Last"></input></div>

      <div className="entry__detail od"><p>Order Date:</p><input placeholder="01-01-01"></input></div>

      <div className="entry__detail dd"><p>Deliver Date:</p><input placeholder="01-01-01"></input></div>

      <div className="entry__detail description"><p>Description:</p><textarea placeholder="Description..."></textarea></div>

      <div className="entry__detail total"><p>Total:</p><input placeholder="19.99"></input></div>

      <div className="entry__buttons">
        <button className="button button--blue" type="button" onClick={props.expandEntry}>Exit</button>

        <button className="button button--pink" type="button" onClick={props.addOrder}>Submit</button>
      </div>
    </form>
  );
}

export default Entry;
