import {ORM} from "redux-orm";
import {Todo} from "./todo";
import {User} from "./user";

export const orm = new ORM({
  stateSelector: (state) => state.ormReducer
});

orm.register(
  Todo,
  User
);
