//import Settings from '../../redux/settings.js';

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
        if(order._id === action.index){
          tempState[i].status = action.status;
          return;
        }
      });
      return tempState;

    case "ADD_ORDER":
      var form = document.getElementById("entry").elements;
      var name = form[0].value;
      var od = form[1].value;
      var dd = form[2].value;
      var description = form[3].value;
      var total = form[4].value;
      var id = tempState.length + 1;

      if(name === "" || od === "" || dd === "" || description === ""|| total === ""){
        return;
      }

      var orderObj = {
        id: id,
        name: name,
        description: description,
        od: od,
        dd: dd,
        total: total,
        status: 0
      }

      tempState.push(orderObj);
      return tempState;

    case "DELETE_ORDER":
      tempState.forEach(function(order, i){
        if(order._id === action.index){
          tempState.splice(i, 1);
          return;
        }
      });
      return tempState;
  }
}
