import { createSlice } from "@reduxjs/toolkit";

type TinitialState = {
  items: TCartItem[];
};

const initialState: TinitialState = {
  items: [],
};

type TCartItem = {
  id?: string;
  title: string;
  price: number;
  quantity: number;
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = CartSlice.actions;

export default CartSlice.reducer;
