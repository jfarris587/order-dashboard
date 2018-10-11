import React from "react";
import { connect } from 'react-redux';
import { changeMode } from '../../redux/actions/display';
import { addOrder } from '../../redux/actions/orders';

const Entry = (props) =>{
  var expanded = "";
  if(props.mode === "add"){
    expanded = " expanded";
  }

  return (
    <form className={"entry" + expanded} id="entry">
      <div className="entry__detail name"><p>Client:</p><input type="text" required="required" placeholder="First Last"></input></div>

      <div className="entry__detail od"><p>Order Date:</p><input type="date" required="required" placeholder="01-01-01"></input></div>

      <div className="entry__detail dd"><p>Deliver Date:</p><input type="date" required="required" placeholder="01-01-01"></input></div>

      <div className="entry__detail description"><p>Description:</p><textarea placeholder="Description..."></textarea></div>

      <div className="entry__detail total"><p>Total:</p><input type="number" required="required" placeholder="19.99"></input></div>

      <div className="entry__buttons">
        <button className="button-secondary exit" type="button" onClick={() => props.dispatch(changeMode("default"))}>Exit</button>

        <button className="button-secondary submit" type="button" onClick={() => props.dispatch(addOrder(props.login.username))}>Submit</button>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(
  mapStateToProps
)(Entry);
