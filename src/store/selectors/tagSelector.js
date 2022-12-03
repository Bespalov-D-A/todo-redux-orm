import { createSelector } from "redux-orm";
import { orm } from "../models";

export const getAllTag = createSelector(
  orm,
  (state) => state.ormReducer.Tag,
  (session, tag) => {
    return session.Tag.all().toRefArray()
     }
);

export const getAllTagAndAddFirst = createSelector(
  orm,
  state => state,
  (session, state) => {
    let arr = getAllTag(state)
    return [{label: 'Показать все', value: null, name: null}, ...arr]
  }
)
