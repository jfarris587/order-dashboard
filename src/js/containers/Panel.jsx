import React from "react";
import Entry from "../components/Entry.jsx";

const Panel = (props) =>{
  var deleting = "";
  var adding = "";

  if(props.delete.mode === true){
    deleting = " deleting";
  }

  if(props.add.mode === true){
    adding = " adding";
  }

  return (
    <div className="panel container">
      <div className="controls">
        <p>Use the board to add orders and track their progress.</p>
        <button className={"button delete"+deleting} onClick={props.deletingOrders}>Delete Order</button>
        <button className={"button button--blue"+adding} onClick={props.addingOrders}>Add Order</button>
      </div>
      <Entry
        addOrder={props.addOrder}
        add={props.add}
        expandEntry={props.expandEntry}
        addingOrders={props.addingOrders}
      />
    </div>
  );
}

export default Panel;