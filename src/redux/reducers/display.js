const displayDefaultState = {
  show: 0,
  page: 0,
  mode: "default"
};

export default (state = displayDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
