import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserName(state, action) {
      state.username = action.payload;
    },
  },
});
export const { addUserName } = userSlice.actions;

export default userSlice.reducer;
