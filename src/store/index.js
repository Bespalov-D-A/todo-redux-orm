import { configureStore } from '@reduxjs/toolkit'
import {createReducer} from 'redux-orm'
import {orm} from './models'
import userSlice from './slices/userSlice'



export const store = configureStore({
  reducer: {
    userSlice,
    ormReducer: createReducer(orm)
  },
})

