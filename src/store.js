import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./components/cart/cartSlice";
import favoriteReducer from "./components/favouritebook/favouriteSlice";
import userReducer from "./components/user/userSlice";

const store = configureStore({
  reducer: {
    cart: cardReducer,
    fav: favoriteReducer,
    user: userReducer,
  },
});

export default store;
