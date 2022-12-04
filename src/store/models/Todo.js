import Model, {attr, fk, many} from "redux-orm";
import {addTagFromTodoCase, addTodoCase, deleteTagFromTodoCase, deleteTodoCase} from "../cases/todoCases";
import {ADD_TAG_FROM_TODO, ADD_TODO, DELETE_TAG_FROM_TODO, DELETE_TODO} from "./constants/todoConstants";


export class Todo extends Model {
  static modelName = "Todo";
  static reducer(action, Todo, session) {
    const {payload, type} = action;
    switch (type) {
      case ADD_TODO:
        return addTodoCase(payload, Todo, session)
      case ADD_TAG_FROM_TODO:
        return addTagFromTodoCase(payload, Todo)
      case DELETE_TAG_FROM_TODO:
        return deleteTagFromTodoCase(payload, Todo)
      case DELETE_TODO:
        return deleteTodoCase(payload, Todo)
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
  tags: many({
    to: "Tag",
    as: 'tagsIds',
    relatedName: 'todos'
  })
};

