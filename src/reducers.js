import { createStore, combineReducers } from 'redux';
import Settings from './settings.js';


const loginApp = () =>({
  type: 'LOGIN_APP'
})



const loginDefaultState = true;
const loginReducer = (state = loginDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
    case "LOGIN_APP":
      return !state;
  }
}

const ordersDefaultState = Settings.slice();
const ordersReducer = (state = ordersDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const detailsDefaultState = [0,0,0,0];
const detailsReducer = (state = detailsDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const addDefaultState = {
  mode: false
};
const addReducer = (state = addDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const deleteDefaultState = {
  mode: false
};
const deleteReducer = (state = deleteDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const showDefaultState = 0;
const showReducer = (state = showDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const pageDefaultState = 0;
const pageReducer = (state = pageDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const initialStore = createStore(
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

export default initialStore;

/*
const rootReducer = (state = initialState, action) => {
  const newState = {...state};

  switch (action.type) {
    case 'INCREMENT':
      newState.age += action.incrementBy;
      break;
    case 'DECREMENT':
      newState.age -= action.decrementBy;
      break;
  }

  return newState;
};

console.log(store.getState);

const unsubscribe = store.subscribe(()=>{
  console.log("STATE CHANGED:", store.getState());
});

const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: "DECREMENT",
  decrementBy
});
*/
