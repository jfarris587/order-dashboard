import React from "react";

const Order = (props) =>{
  return (
    <div className="order">
      <div className="order__detail name">
        <p>name</p>
      </div>

      <div className="order__detail description">
        <p>description</p>
      </div>

      <div className="order__detail od">
        <p>order date</p>
      </div>

      <div className="order__detail dd">
        <p>delivery date</p>
      </div>

      <div className="order__detail total">
        <p>total</p>
      </div>

      <div className="order__detail status">
        <p>closed<span className="status-symbol closed"></span></p>
      </div>

    </div>
  );
}

export default Order;
