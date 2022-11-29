import Model, { attr } from "redux-orm";

export class User extends Model {
  static modelName = "User";
  static reducer(action, User, session) {
    switch (action.type) {
      case "ADD_USER":
        if(!action.payload.id) {
          let id = session.User.all().toRefArray().length + 1
          let obj = {...action.payload, id}
          User.create(obj);
          break
        }
        if (!User.filter({ id: action.payload.id }).exists()) {
          User.create(action.payload);
        }
        break
      case 'UPDATE_USER':
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
