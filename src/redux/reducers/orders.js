const ordersDefaultState = {};

export default (state = ordersDefaultState, action) => {
  var tempState = [...state];

  switch (action.type) {
    default:
      return tempState;

    case "SET_ORDERS":
    return action.orders;

    case "CHANGE_ORDER_STATUS":
      tempState.forEach(function(order, i){
        if(order._id === action.id){
          tempState[i].status = action.status;
          return;
        }
      });
      return tempState;

    case "ADD_ORDER":
      tempState.push(action.payload);
      return tempState;

    case "DELETE_ORDER":
      tempState.forEach(function(order, i){
        if(order._id === action.id){
          tempState.splice(i, 1);
          return;
        }
      });
      return tempState;
  }
}
