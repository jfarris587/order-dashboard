import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';
import App from './containers/App.jsx';
import '../scss/style.scss';

const store = configureStore();

store.subscribe(()=>{
  console.log("STATE CHANGED:", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
