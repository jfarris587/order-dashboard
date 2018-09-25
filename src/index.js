import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers'
import App from './js/App.jsx';
import './scss/style.scss';

const store = createStore(rootReducer);

store.subscribe(()=>{
  console.log("STATE CHANGED:", store.getState());
});




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
