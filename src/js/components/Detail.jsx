import React from "react";

const Detail = (props) => {
  var classIcon = "box-open";
  var type = "open orders";

  if(props.id === 2){
    classIcon = "credit-card";
    type = "pending orders";
  }
  else if(props.id === 3){
    classIcon = "shopping-cart";
    type = "closed orders";
  }
  else if(props.id === 4){
    classIcon = "users";
    type = "total customers";
  }

  return (
    <div className="detail__wrapper col-lg-3 col-md-6 col-sm-6">
      <div className={"detail detail-"+props.id}>
        <h1>{props.data}<span>{type}</span></h1>
        <i className={"fas fa-" + classIcon}></i>
      </div>
    </div>
  );
}

export default Detail;
