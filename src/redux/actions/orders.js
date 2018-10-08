export const setOrders = () =>{
  const request = fetch('/api/orders');

  return (dispatch) => {
    request.then(response =>
      response.json().then(data => {
        dispatch(
          {
            type: "SET_ORDERS",
            orders: data
          }
        );
      })
    )
  }
};

export const changeOrderStatus = (id, status) =>{
  const request = fetch('/api/change-status',
    {
      method: 'POST',
      body: JSON.stringify({
        id,
        status,
      }),
      headers: {"Content-Type": "application/json"}
    }
  );

  return (dispatch) => {
    request.then((data) => {
      dispatch(
        {
          type: 'CHANGE_ORDER_STATUS',
          id,
          status
        }
      );
    })
  }
};

export const addOrder = () =>{
  var form = document.getElementById("entry").elements;
  var name = form[0].value;
  var od = form[1].value;
  var dd = form[2].value;
  var description = form[3].value;
  var total = form[4].value;
  var id = 0;

  if(name === "" || od === "" || dd === "" || description === ""|| total === ""){
    return () => {};
  }

  var orderObj = {
    _id: id,
    name,
    description,
    od,
    dd,
    total,
    status: 0
  }

  const request = fetch('/api/add-order',
    {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,
        od,
        dd,
        total
      }),
      headers: {"Content-Type": "application/json"}
    }
  );


  return (dispatch) => {
    request.then((data) => {
      orderObj._id = data;
      dispatch(
        {
          type: "ADD_ORDER",
          payload: orderObj
        }
      );
    })
  }
};

export const deleteOrder = (id) =>{

  const request = fetch('/api/delete-order',
    {
      method: 'POST',
      body: JSON.stringify({
        id
    }),
      headers: {"Content-Type": "application/json"}
    }
  );

  return (dispatch) => {
    request.then((data) => {
      dispatch(
        {
          type: 'DELETE_ORDER',
          id: id
        }
      );
    })
  }
};
