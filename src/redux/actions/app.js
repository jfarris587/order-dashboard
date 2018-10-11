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
    request.then(response => {
      if(response.status === 200){
        dispatch({
          type: 'LOGIN_APP',
          username: username
        });
        dispatch(setOrders(username));
      }
      else if(response.status === 401){
        alert('username or password is incorrect');
      }
      else if(response.status === 500){
        alert('server error, try again later');
      }
    })
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
    request.then(response => {
      if(response.status === 401){
        alert('username already exists');
      }
      else if(response.status === 500){
        alert('server error, try again later');
      }
    })
    .catch(error => {
      alert('OOPS! Something went wrong');
    })
  }
};
