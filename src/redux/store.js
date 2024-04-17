import { configureStore } from '@reduxjs/toolkit';
import elementsReducer from './elementsSlice';
import { thunk } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    elements: elementsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
