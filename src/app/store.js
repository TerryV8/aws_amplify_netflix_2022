import { configureStore } from "@reduxjs/toolkit";
import soundOnReducer from "../features/soundOnSlice";
import loggedInReducer from "../features/loggedInSlice";
import counterReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    soundOn: soundOnReducer,
    loggedIn: loggedInReducer,
    counter: counterReducer,
  },
});
