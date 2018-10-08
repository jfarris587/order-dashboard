import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../reducers/login';
import displayReducer from '../reducers/display';
import ordersReducer from '../reducers/orders';

/*
const storeLayout = {
  login: true,
  orders: [null],
  display: {
    show: 0,
    page: 0,
    mode: "default"
  }
}
*/

export default () => {
  const store = createStore(
    combineReducers({
      login: loginReducer,
      orders: ordersReducer,
      display: displayReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
}
