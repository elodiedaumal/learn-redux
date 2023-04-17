import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';

const increment = () => {
  return {
    type: 'INCREMENT',
  };
};
const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

const counter = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  if (action.type === 'DECREMENT') {
    return state - 1;
  }
};

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
