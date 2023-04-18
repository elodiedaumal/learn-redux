import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    reset(state) {
      state.counter = 0;
    },
    show(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthanticated: false };

const authSlice = createSlice({
  name: 'authantication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthanticated = true;
    },
    logout(state) {
      state.isAuthanticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
