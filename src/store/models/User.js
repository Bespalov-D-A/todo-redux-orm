import Model, { attr } from "redux-orm";
import {addUserCase} from "../cases/userCases";
import {ADD_USER, UPDATE_USER} from "./constants/userConstants";

export class User extends Model {
  static modelName = "User";
  static reducer(action, User, session) {
    switch (action.type) {
      case ADD_USER:
        return addUserCase(action, User, session)
      case UPDATE_USER:
        break
    }
  }
}

User.fields = {
  name: attr(),
};
User.options = {
  idAttribute: "id",
};
