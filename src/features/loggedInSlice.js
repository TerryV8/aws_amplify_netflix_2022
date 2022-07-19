import { createSlice } from "@reduxjs/toolkit";

const initialLoggedIn = {
  isLoggedIn: false,
  username: "",
};

export const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState: initialLoggedIn,
  reducers: {
    loggedIn: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.value = action.payload.username;
    },
    loggedOut: (state, action) => {
      state.isLoggedIn = false;
      state.username = "";
      state.value = "";
    },
  },
});

export const { loggedIn, loggedOut } = loggedInSlice.actions;

export default loggedInSlice.reducer;
