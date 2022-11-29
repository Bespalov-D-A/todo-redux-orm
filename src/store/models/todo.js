import Model, { attr, fk } from "redux-orm";

export class Todo extends Model {
  static modelName = "Todo";
  static reducer(action, Todo, session) {
    switch (action.type) {
      case "ADD_TODO":
        if (!Todo.filter({ id: action.payload.id }).exists()) {
          Todo.create(action.payload);
        }
        break;
    }
  }
}

Todo.fields = {
  id: attr(),
  title: attr(),
  todosId: fk({
    to: "User",
    as: "user",
    relatedName: "todos",
  }),
};
