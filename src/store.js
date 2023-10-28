import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./components/cartSlice";

const store = configureStore({
  reducer: {
    cart: cardReducer,
  },
});

export default store;
