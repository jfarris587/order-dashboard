import React from "react";
import Order from './components/Order.jsx'
import Labels from './components/Labels.jsx'
import Entry from './components/Entry.jsx'

const Board = (props) =>{

  return (
    <div className="board container">
      <div className="orders">
        <Labels />
        <Entry
          addOrder={props.addOrder}
          entryExpanded={props.entryExpanded}
          expandEntry={props.expandEntry}
        />

        {props.orders.map((order, i) => (
          <Order
            key={order.id}
            id={i}
            data={props.orders[i]}
          />
        ))}

      </div>
    </div>
  );
}

export default Board;
