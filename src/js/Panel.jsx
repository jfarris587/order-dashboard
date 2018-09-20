import React from "react";

const Panel = (props) =>{


  return (
    <div className="panel container">
      <div className="controls">
        <p>Use the board to add orders and track their progress.</p>
        <button className="button delete">Delete Order</button>
        <button className="button button--blue">Add Order</button>
      </div>
    </div>
  );
}

export default Panel;
