import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import configureStore from './redux/store/configureStore';
import { loginApp } from './redux/actions/app';
import App from './js/containers/App.jsx';
import './scss/style.scss';

const store = configureStore();

const unsubscribe = store.subscribe(()=>{
  console.log("STATE CHANGED:", store.getState());
});

store.dispatch(loginApp());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
