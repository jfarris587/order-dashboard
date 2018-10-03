import React from "react";
import { connect } from 'react-redux';
import { changeOrderStatus } from '../../redux/actions/orders';

const Status = (props) =>{
  var status = "open";
  var selected = "";

  if(props.status === props.selected){
    selected = "selected";
  }
  if(props.status === 1){
    status = "pending";
  }
  else if(props.status === 2){
    status = "closed";
  }

  var classes = `symbol ${status} ${selected}`;
  return (
    <span className={classes} onClick={() => props.dispatch(changeOrderStatus(props.id, props.status))}> {status}</span>
  );
}

export default connect()(Status);
