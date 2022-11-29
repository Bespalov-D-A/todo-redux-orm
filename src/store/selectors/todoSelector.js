import {createSelector} from "redux-orm";
import {orm} from "../models";

export const todoSelector = createSelector(orm, state => state.testSlice.value, (session, id)=> {
  return session.Todo
})
