import React from "react";
import { connect } from 'react-redux';
import { changeMode } from '../../redux/actions/display';
import Entry from "../components/Entry.jsx";

const Panel = (props) =>{
  var deleting = "";
  var adding = "";

  if(props.display.mode === "delete"){
    deleting = " deleting";
  }

  if(props.display.mode === "add"){
    adding = " adding";
  }

  return (
    <div className="panel container">
      <div className="controls">
        <p>Use the board to add orders and track their progress.</p>
        <button className={"button-secondary"+adding} onClick={() => props.dispatch(changeMode("add"))}>Add Order</button>
      </div>
      <Entry
        mode = {props.display.mode}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    display: state.display
  }
}

export default connect(
  mapStateToProps
)(Panel);
