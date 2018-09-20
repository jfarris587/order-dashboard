import React from "react";
import Detail from './components/Detail.jsx'

const Header = (props) =>{


  return (
    <div className="header container">
      <div className="title row">
          <h1>Loreum Ipsum</h1>
          <p>loreum ipsum valuet et consequitor tullio, sed quamquam ritue.</p>
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
