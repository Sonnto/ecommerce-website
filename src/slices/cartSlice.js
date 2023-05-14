import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Actions
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
      //`...` spread operator; ensures whatever items we input, we won't lose them (shopping cart)
      //`payload` contains product passed through from dispatch(addToCart(product)); from Product.jsx
      //`payload` product is added to the shopping cart
      //Did not use items.push() so as to not change current object; immutable update to shopping cart object
    },
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;
