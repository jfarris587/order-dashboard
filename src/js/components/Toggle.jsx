import React from "react";
import { connect } from 'react-redux';

const Toggle = (props) =>{
  var array = ['Sign in', 'Sign up'];

  return (
    <div className="toggle">
      {array.map((button, i) => {
        var toggled = "";
        if(props.mode === i){
          toggled = "toggled";
        }
        return (
          <div key={i} className={`toggle-button ${toggled}`} onClick={()=>props.changeMode(i)}>
            {array[i]}
          </div>
        );
      }

      )}

    </div>
  );
}

export default connect()(Toggle);
