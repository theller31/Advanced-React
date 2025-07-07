import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, { payload }) => {
      const item = state.find(p => p.id === payload.id);
      if (item) {
        item.count += 1;
      } else {
        state.push({ ...payload, count: 1 });
      }
    },
    removeItem: (state, { payload }) => {
      return state.filter(p => p.id !== payload);
    },
    clearCart: () => []
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
