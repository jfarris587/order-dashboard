const loginDefaultState = false;

export default (state = loginDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
    case "LOGIN_APP":
      return !state;
  }
}
