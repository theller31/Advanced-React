import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

function saveToSession(state) {
  sessionStorage.setItem('cart', JSON.stringify(state.cart));
}

function loadFromSession() {
  const data = sessionStorage.getItem('cart');
  return data ? JSON.parse(data) : [];
}

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  preloadedState: {
    cart: loadFromSession()
  }
});

// persist
store.subscribe(() => saveToSession(store.getState()));
