import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import initialStore from './reducers'
import App from './js/containers/App.jsx';
import './scss/style.scss';
import { createStore, combineReducers } from 'redux';
import Settings from './settings.js';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
