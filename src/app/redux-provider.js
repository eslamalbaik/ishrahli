'use client';
import { Provider } from 'react-redux';
import store from './lib/@redux-toolkit/store/store';
export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}