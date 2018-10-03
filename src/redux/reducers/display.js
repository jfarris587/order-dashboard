const displayDefaultState = {
  show: 0,
  page: 0,
  mode: "default"
};

export default (state = displayDefaultState, action) => {
  switch (action.type) {
    default:
      return state;

    case "SHOW_ORDER_TYPE":
      var tempState = {...state};
      tempState.show = action.show;
      return tempState;

    case "CHANGE_MODE":
      var tempState = {...state};
      if(tempState.mode !== action.mode){
        tempState.mode = action.mode;
      }
      else{
        tempState.mode = "default";
      }
      return tempState;

  }
}
