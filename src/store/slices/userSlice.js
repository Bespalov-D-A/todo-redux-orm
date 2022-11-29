import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  selectedUserId: null
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setSelectedUserId: (state, action) => {
      state.selectedUserId = action.payload
    }
  },
})

export const { setSelectedUserId} = userSlice.actions

export default userSlice.reducer
