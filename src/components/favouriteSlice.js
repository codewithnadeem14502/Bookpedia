import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteItem: [],
};

const favoriteSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addFavoriteBook(state, action) {
      state.favouriteItem.push(action.payload);
    },
    removeFavoriteBook(state, action) {
      state.favouriteItem = state.favouriteItem.filter(
        (item) => item.bookid !== action.payload
      );
    },
  },
});

export const { addFavoriteBook, removeFavoriteBook } = favoriteSlice.actions;
export const getCart = (state) => state.fav.favouriteItem;
export default favoriteSlice.reducer;
