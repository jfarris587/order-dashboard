const displayDefaultState = {
  show: 0,
  mode: "default"
};

export default (state = displayDefaultState, action) => {
  var tempState = {...state};

  switch (action.type) {
    default:
      return tempState;

    case "SHOW_ORDER_TYPE":
      tempState.show = action.show;
      return tempState;

    case "CHANGE_MODE":
      if(tempState.mode !== action.mode){
        tempState.mode = action.mode;
      }
      else{
        tempState.mode = "default";
      }
      return tempState;

  }
}
