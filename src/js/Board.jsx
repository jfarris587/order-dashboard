import React from "react";
import Order from './components/Order.jsx'
import Labels from './components/Labels.jsx'
import Entry from './components/Entry.jsx'

const Board = (props) =>{

  var reversedArray = props.orders.slice().reverse();
  return (
    <div className="board container">
      <div className="orders">
        <Entry
          addOrder={props.addOrder}
          add={props.add}
          expandEntry={props.expandEntry}
        />

        <Labels />


      {reversedArray.map((order, i) => (
          <Order
            key={order.id}
            id={order.id}
            data={reversedArray[i]}
            deleteOrder={props.deleteOrder}
            changeStatus={props.changeStatus}
          />
        ))}

      </div>
    </div>
  );
}

export default Board;
