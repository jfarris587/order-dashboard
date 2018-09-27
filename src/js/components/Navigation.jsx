import React from "react";

const Navigation = (props) =>{
  var displayNext = "";
  var displayPrev = "";

  console.log(props.totalPages, props.page);

  if(props.totalPages <= props.page){
    displayNext = " hide";
  }
  if(0 >= props.page){
    displayPrev = " hide";
  }

  return (
    <div className="order navigation">
        <i className={`fas fa-angle-left ${displayPrev}`} onClick={props.prevPage}></i>
        <i className={`fas fa-angle-right ${displayNext}`} onClick={props.nextPage}></i>
    </div>
  );
}

export default Navigation;
