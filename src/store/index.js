import { configureStore } from '@reduxjs/toolkit'
import {createReducer} from 'redux-orm'
import {orm} from './models'
import todoSlice from './slices/todoSlice'
import userSlice from './slices/userSlice'



export const store = configureStore({
  reducer: {
    userSlice,
    todoSlice,
    ormReducer: createReducer(orm)
  },
})

