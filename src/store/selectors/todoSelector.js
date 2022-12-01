import { createSelector } from "redux-orm";
import { orm } from "../models";

export const getTodosByUserId = createSelector(
  orm,
  (state) => state.userSlice.selectedUserId,
  (session, selectedUserId) => {
    if(selectedUserId && selectedUserId !== 'All') {
    return session.User.withId(selectedUserId).todos.toRefArray();
    } else if(selectedUserId === 'All') {
      return session.Todo.all().toRefArray()
    } else return 'Юзер не выбран'
  }
);
