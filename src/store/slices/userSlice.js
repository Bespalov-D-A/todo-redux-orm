import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedUserId: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setSelectedUserId: (state, action) => {
      if (action.payload === "") state.selectedUserId = null;
      else state.selectedUserId = action.payload;
    },
  },
});

export const { setSelectedUserId } = userSlice.actions;

export default userSlice.reducer;
