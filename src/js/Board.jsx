import React from "react";
import Order from './components/Order.jsx'

const Board = (props) =>{

  return (
    <div className="board container">
      <div className="orders">
        <Order type={"header"}/>
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
