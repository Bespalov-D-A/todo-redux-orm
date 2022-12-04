import {ORM} from "redux-orm";
import {Tag} from "./Tag";
import {Todo} from "./Todo";
import {User} from "./User";

export const orm = new ORM({
  stateSelector: (state) => state.ormReducer
});

orm.register(
  Todo,
  User,
  Tag
);
