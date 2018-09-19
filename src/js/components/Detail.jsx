import React from "react";

const Detail = (props) => {

  return (
    <div className="detail__wrapper col-lg-3 col-md-6">
      <div className={"detail detail-"+props.id}>
        <h1>48<span>hours</span></h1>
      </div>
    </div>
  );
}

export default Detail;
