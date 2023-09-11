import { configureStore, createReducer } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    // contact: contactReducer,
    // cart: createReducer,
  },
})