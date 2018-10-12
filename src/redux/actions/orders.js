export const setOrders = (username) =>{
  const request = fetch('/api/orders',
    {
      method: 'POST',
      body: JSON.stringify({
        username
      }),
      headers: {"Content-Type": "application/json"}
    }
  );
  return (dispatch) => {
    request.then(response => {
      if(response.status === 500){
        alert('server error, try again later.')
      }
      else if(response.status === 200){
        response.json().then(data => {

          dispatch(
            {
              type: "SET_ORDERS",
              orders: data.orders
            }
          );

        })
        .catch(error => {
          alert('OOPS! Something went wrong');
        })
      }
    })
    .catch(error => {
      alert('OOPS! Something went wrong');
    })
  }
};

export const changeOrderStatus = (id, username, status) =>{
  const request = fetch('/api/change-status',
    {
      method: 'POST',
      body: JSON.stringify({
        username,
        id,
        status,
      }),
      headers: {"Content-Type": "application/json"}
    }
  );

  return (dispatch) => {
    request.then(response => {
      if(response.status === 500){
        alert('server error, try again later.')
      }
      else if(response.status === 200){
        dispatch(
          {
            type: 'CHANGE_ORDER_STATUS',
            id,
            status
          }
        );
      }
    })
    .catch(error => {
      alert('OOPS! Something went wrong');
    })
  }
};

export const addOrder = (username) =>{
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
        username: username,
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
    request.then(response => {
      orderObj._id = response;
      if(response.status === 500){
        alert('server error, try again later.')
      }
      else if(response.status === 200){
        dispatch(
          {
            type: "ADD_ORDER",
            payload: orderObj
          }
        );
      }
    })
    .catch(error => {
      alert('OOPS! Something went wrong');
    })
  }
};

export const deleteOrder = (id, username) =>{
  const request = fetch('/api/delete-order',
    {
      method: 'POST',
      body: JSON.stringify({
        id,
        username
    }),
      headers: {"Content-Type": "application/json"}
    }
  );

  return (dispatch) => {
    request.then(response => {
      if(response.status === 500){
        alert('server error, try again later.')
      }
      else if(response.status === 200){
        dispatch(
          {
            type: 'DELETE_ORDER',
            id: id
          }
        );
      }
    })
    .catch(error => {
      alert('OOPS! Something went wrong');
    })
  }
};
