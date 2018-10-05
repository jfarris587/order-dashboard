export const showOrderType = (payload) => (
  {
  type: 'SHOW_ORDER_TYPE',
  show: payload
  }
);

export const changeMode = (payload) =>({
  type: 'CHANGE_MODE',
  mode: payload
});
