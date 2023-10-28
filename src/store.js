import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./components/cartSlice";
import favoriteReducer from "./components/favouriteSlice";
import userReducer from "./components/userSlice";

const store = configureStore({
  reducer: {
    cart: cardReducer,
    fav: favoriteReducer,
    user: userReducer,
  },
});

export default store;
