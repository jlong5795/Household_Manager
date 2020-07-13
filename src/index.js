import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { userReducer } from './reducers/userReducer';

const store = createStore(userReducer)

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>  
  </React.StrictMode>
  ,
  document.getElementById('root')
);


