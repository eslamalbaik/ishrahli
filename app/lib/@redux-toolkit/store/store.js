import { configureStore } from '@reduxjs/toolkit';
import passwordReducer from '../passwordSlice';
import filterReducer from '../filterSlice';

const store = configureStore({
  reducer: {
    password: passwordReducer,
    filters: filterReducer, 
  },
});

export default store;
