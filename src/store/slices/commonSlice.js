import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: null,
};

export const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload
    },
  },
});

export const { setTitle } = commonSlice.actions;

export default commonSlice.reducer;
