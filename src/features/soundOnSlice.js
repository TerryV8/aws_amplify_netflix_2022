import { createSlice } from "@reduxjs/toolkit";

const initialStateSoundOn = {
  isSoundOn: false,
};

export const soundOnSlice = createSlice({
  name: "soundOn",
  initialState: initialStateSoundOn,
  reducers: {
    soundOffOn: (state) => {
      state.isSoundOn = !state.isSoundOn;
    },
    soundOn: (state) => {
      state.isSoundOn = true;
    },
    soundOff: (state) => {
      state.isSoundOn = false;
    },
  },
});

export const { soundOffOn, soundOff, soundOn } = soundOnSlice.actions;

export default soundOnSlice.reducer;
