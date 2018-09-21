import React from "react";
import Order from './components/Order.jsx'
import Labels from './components/Labels.jsx'
import Entry from './components/Entry.jsx'

const Board = (props) =>{

  return (
    <div className="board container">
      <div className="orders">
        <Labels />
        <Entry />
        
        {props.orders.map((order, i) => (
          <Order
            type={"order"}
            key={i}
            id={i}
            data={props.orders[i]}
            expandOrder={props.expandOrder}
          />
        ))}

      </div>
    </div>
  );
}

export default Board;
