import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const store = configureStore({
  reducer,
  middleware: [thunkMiddleware],
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;