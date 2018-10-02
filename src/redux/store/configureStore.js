import { createStore, combineReducers } from 'redux';
import loginReducer from '../reducers/login';
import displayReducer from '../reducers/display';
import ordersReducer from '../reducers/orders';

const storeLayout = {
  login: true,
  orders: [null],
  display: {
    show: 0,
    page: 0,
    mode: "default"
  }
}

export default () => {
  const store = createStore(
    combineReducers({
      login: loginReducer,
      orders: ordersReducer,
      display: displayReducer
    })
  );

  return store;
}
