import { setOrders } from './orders';

const crypto = require('crypto');

export const loginApp = (e) =>{
  var form = document.getElementById("login").elements;
  var username = form[0].value;
  var password = form[1].value;

  password = crypto.createHash('md5').update(password).digest('hex');

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
        console.log(data.length);
        if(data.length > 0){
          dispatch({
            type: 'LOGIN_APP'
          });
          dispatch(setOrders());
        }
      })
    )
  }
};

export const logoutApp = () =>({
  type: 'LOGIN_APP'
});
