const loginDefaultState = {
  access: false,
  username: null
};

export default (state = loginDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case "LOGIN_APP":
      tempState.access = !tempState.access;
      tempState.username = action.username;
      return tempState;

  }
}
