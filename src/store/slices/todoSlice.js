import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTag: null,
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setSelectedTag: (state, action) => {
      if (action.payload === "") state.selectedTag = null;
      else state.selectedTag = action.payload;
    },
  },
});

export const { setSelectedTag } = todoSlice.actions;

export default todoSlice.reducer;
