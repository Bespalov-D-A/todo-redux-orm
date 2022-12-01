import { createSelector } from "redux-orm";
import { orm } from "../models";

export const getAllTag = createSelector(
  orm,
  (state) => state.ormReducer.Tag,
  (session, tag) => {
    return session.Tag.all().toRefArray()
     }
);
