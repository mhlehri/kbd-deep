import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  items: TCartItem[];
};

const initialState: TInitialState = {
  items: [],
};

type TCartItem = {
  slug?: string;
  name: string;
  price: number;
  stock: number;
  quantity: number;
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const found = state.items.find((item) => {
        return action.payload.slug === item.slug;
      });
      if (!found) {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.slug !== action.payload);
    },

    resetItem: (state) => {
      state.items = [];
    },

    changeQty: (state, action) => {
      state.items = state.items.map((item) => {
        const s = action.payload.slug;
        return s === item.slug
          ? { ...item, quantity: action.payload.quantity }
          : item;
      });
    },
  },
});

export const { addItem, removeItem, changeQty, resetItem } = CartSlice.actions;

export default CartSlice.reducer;
