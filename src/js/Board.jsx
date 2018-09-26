import React from "react";
import Order from './components/Order.jsx'
import Labels from './components/Labels.jsx'
import Entry from './components/Entry.jsx'

const Board = (props) =>{

  var reversedArray = props.orders.slice().reverse();
  return (
    <div className="board container">
      <div className="orders">

        <Labels />

        {reversedArray.map((order, index) => (
          <Order
            key={order.id}
            id={order.id}
            index={index}
            data={reversedArray[index]}
            deleteOrder={props.deleteOrder}
            changeStatus={props.changeStatus}
          />
        ))}

      </div>
    </div>
  );
}

export default Board;
