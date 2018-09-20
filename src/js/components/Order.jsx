import React from "react";

const Order = (props) =>{

  if(props.type === "header"){
    var name = <p>name</p>;
    var description = <p>description</p>;
    var od = <p>order date</p>;
    var dd = <p>deliver date</p>;
    var total = <p>total</p>;
    var status = <p>status</p>;
    var classes = "sections";
  }

  else if(props.type === "order"){
    name = <p>{props.data.name}</p>;
    description = <p>{props.data.description}</p>;
    od = <p>{props.data.od}</p>;
    dd = <p>{props.data.dd}</p>;
    total = <p>{"$"+props.data.total}</p>;
    status = <p>{props.data.status}</p>;
    classes = "";
  }


  return (
    <React.Fragment>
      <div className={"order "+classes}>
        <div className="order__detail toggle">
          {props.data && <i className="fas fa-bars" onClick={() => props.expandOrder(props.id)}></i>}
        </div>

        <div className="order__detail name">{name}</div>

        <div className="order__detail description">{description}</div>

        <div className="order__detail od">{od}</div>

        <div className="order__detail dd">{dd}</div>

        <div className="order__detail total">{total}</div>

        <div className={"order__detail symbol "+status}>{status}</div>
      </div>

      {props.data &&
        <div className={"information"}>
          <div className="information__info">
            <p><span>Client:</span>{name}</p>
            <p><span>Description:</span> {description}</p>
            <p><span>Order Date:</span> {od}</p>
            <p><span>Deliver Date:</span> {dd}</p>
            <p><span>Total:</span> {total}</p>
            <p className={"symbol "+status}><span>Status:</span> {status}</p>
          </div>
        </div>
      }

    </React.Fragment>
  );
}

export default Order;

/*
<div className={"information " + expanded}>
  <div className="">
    <p>{name}</p>
  </div>

  <div className="scription">
    <p>{description}</p>
  </div>

  <div className="">
    <p>{od}</p>
  </div>

  <div className="">
    <p>{dd}</p>
  </div>

  <div className="">
    <p>{total}</p>
  </div>

  <div className={"status "+status}>
    <p>{status}</p>
  </div>
</div>

</div>*/
