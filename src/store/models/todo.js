import Model, { attr, fk } from "redux-orm";

export class Todo extends Model {
  static modelName = "Todo";
  static reducer(action, Todo, session) {
    switch (action.type) {
      case "ADD_TODO":
        if (!action.payload.id) {
          let id;
          if (session.Todo.all().last()) {
            id = session.Todo.all().last().ref.id + 1;
          } else id = 1
          let obj = { ...action.payload, id };
          Todo.create(obj);
          break;
        }
        else if (!Todo.filter({ id: action.payload.id }).exists()) {
          Todo.create(action.payload);
        }
        break;
      case "DELETE_TODO":
        Todo.withId(action.payload).delete();
        break;
    }
  }
}

Todo.fields = {
  id: attr(),
  title: attr(),
  description: attr(),
  userId: fk({
    to: "User",
    as: "user",
    relatedName: "todos",
  }),
};
