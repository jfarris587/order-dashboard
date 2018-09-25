import React from "react";
import Detail from './components/Detail.jsx'

const Header = (props) =>{


  return (
    <div className="header container">
      <div className="title row">
        <div className="left">
          <h1>BizBoard</h1>
          <p>Dashboard for tracking orders from clients...</p>
        </div>

        <div className="right">
          <button className="button button--blue" onClick={props.addingOrders}>Log Out</button>
        </div>

      </div>
      <div className="details row">
        {props.details.map((detail, i) => (
          <Detail
            key={i}
            id={i+1}
            data={props.details[i]}
          />
        ))}

      </div>
    </div>
  );
}

export default Header;
