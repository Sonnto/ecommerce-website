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
    removeFromCart: (state, action) => {
      //find item with corresponding `id` to remove from Redux Store, Shopping Cart
      //for every items in state, check cart item's id, if match (action.payloard) id passed through, remove
      //if found, it returns 0, if not found, returns -1.
      //if found, tells position of item in array
      console.log("removeFromCart triggered");
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      //copies current shopping cart to change
      let newCart = [...state.items];
      if (index >= 0) {
        //item exists in cart, remove it (one)
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove product/item with ID: ${action.payload.id} as it is not found in the shopping cart`
        );
      }
      //after cutting/splicing matched action.payload.id product from array, assigns the array of items in global store to newCart
      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;
