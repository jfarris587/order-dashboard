import { createStore, combineReducers } from 'redux';
import

const storeLayout = {

}

const store = createStore(
  combineReducers({
    orders: ordersReducer,
    details: detailsReducer,
    login: loginReducer,
    add: addReducer,
    delete: deleteReducer,
    show: showReducer,
    page: pageReducer
  })
);
