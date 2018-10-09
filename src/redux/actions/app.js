import { setOrders } from './orders';

export const loginApp = (username, password) =>{
  const request = fetch('/api/login',
    {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,

      }),
      headers: {"Content-Type": "application/json"}
    }
  );

  return (dispatch) => {
    request.then(response =>
      response.json().then(data => {
        if(data.length > 0){
          dispatch({
            type: 'LOGIN_APP'
          });
          dispatch(setOrders());
        }
      })
      .catch(error => {
        alert('OOPS! Something went wrong');
      })
    )
    .catch(error => {
      alert('OOPS! Something went wrong');
    })
  }
};

export const logoutApp = () =>({
  type: 'LOGIN_APP'
});

export const signUpApp = (username, email, password) =>{
  const request = fetch('/api/signup',
    {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {"Content-Type": "application/json"}
    }
  );

  return (dispatch) => {
    request.then(
      response =>{}
    )
    .catch(error => {
      alert('OOPS! Something went wrong');
    })
  }
};
