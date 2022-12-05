import { createSelector } from "redux-orm";
import { orm } from "../models";

export const userSelector = createSelector(
  orm,
  (state) => state.ormReducer.User,
  (session, id) => {
    return session.User.all().toRefArray();
  }
);

export const getUserSelector = createSelector(
  orm,
  (state) => state.userSlice.selectedUserId,
  (session, selectedUserId) => {
    if (selectedUserId === "All") {
      return { id: "All", name: 'All' };
    } else {
      const obj = session.User.withId(selectedUserId);
      if (obj) return obj.ref;
      else return null;
    }
  }
);
