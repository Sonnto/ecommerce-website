import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";

// GLOBAL STORE SET UP
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
