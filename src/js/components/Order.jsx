import React from "react";

const Order = (props) =>{

  return (
    <React.Fragment>
      <div className={"order"}  onClick={() => props.expandOrder(props.id)}>
        <div className="order__detail toggle"><i className="fas fa-bars"></i></div>

        <div className="order__detail name"><p>{props.data.name}</p></div>

        <div className="order__detail description"><p>{props.data.description}</p></div>

        <div className="order__detail od"><p>{props.data.od}</p></div>

        <div className="order__detail dd"><p>{props.data.dd}</p></div>

        <div className="order__detail total"><p>{props.data.total}</p></div>

        <div className={"order__detail symbol "+props.data.status}><p>{props.data.status}</p></div>
      </div>

      {props.data &&
        <div className={"information"}>
          <div className="information__info">
            <p><span>Client: </span>{props.data.name}</p>
            <p><span>Description: </span> {props.data.description}</p>
            <p><span>Order Date: </span> {props.data.od}</p>
            <p><span>Deliver Date: </span> {props.data.dd}</p>
            <p><span>Total: </span>${props.data.total}</p>
            <p className={"symbol "+props.data.status}><span>Status: </span> {props.data.status}</p>
          </div>
        </div>
      }

    </React.Fragment>
  );
}

export default Order;
