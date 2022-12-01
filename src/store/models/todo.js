import Model, { attr, fk, many } from "redux-orm";

export class Todo extends Model {
  static modelName = "Todo";
  static reducer(action, Todo, session) {
    const { payload, type } = action;
    switch (type) {
      case "ADD_TODO":
        if (!payload.id) {
          let id;
          if (session.Todo.all().last()) {
            id = session.Todo.all().last().ref.id + 1;
          } else id = 1;
          let obj = { ...payload, id };
          Todo.create(obj);
          break;
        } else if (!Todo.filter({ id: payload.id }).exists()) {
          Todo.create(payload);
        }
        break;
      case "ADD_TAG_FROM_TODO":
        if (
          !Todo.withId(payload.todoId)
            .tags.filter({ name: payload.tag })
            .exists()
        )
          Todo.withId(payload.todoId).tags.add(payload.tag);
        break;
      case 'DELETE_TAG_FROM_TODO':
        Todo.withId(payload.todoId).tags.remove(payload.tag);
        break
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
  tags: many("Tag", "todos"),
};
