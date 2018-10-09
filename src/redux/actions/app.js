import { setOrders } from './orders';

export const loginApp = (e) =>{
  var form = document.getElementById("login").elements;
  var username = form[0].value;
  var password = form[1].value;

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

export const signUpApp = (e) =>{
  var form = document.getElementById("login").elements;
  var username = form[0].value;
  var email = form[1].value;
  var password = form[2].value;
  var confirm = form[3].value;

  if(password !== confirm){
    //return () => {}
  }

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
    //request.then(response =>{})
  }
};
