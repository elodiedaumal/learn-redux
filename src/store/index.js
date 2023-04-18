import { createStore } from 'redux';

import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.amount;
    },
    decrement(state, action) {
      state.counter = state.counter - action.amount;
    },
    reset(state) {
      state.counter = 0;
    },
    show(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = createStore(counterSlice.reducer);

export default store;
