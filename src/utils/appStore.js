import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// console.log(cartReducer, "cartReducer");
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
