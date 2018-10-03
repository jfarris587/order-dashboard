export const changeOrderStatus = (index, status) =>({
  type: 'CHANGE_ORDER_STATUS',
  index,
  status
});

export const addOrder = (index) =>({
  type: 'ADD_ORDER',
  index
});

export const deleteOrder = (index) =>({
  type: 'DELETE_ORDER',
  index
});
