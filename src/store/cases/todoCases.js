export const addTodoCase = (payload, Todo, session) => {
  if (!payload.id) {
    let id;
    if (session.Todo.all().last()) {
      id = session.Todo.all().last().ref.id + 1;
    } else id = 1;
    let obj = { ...payload, id };
    Todo.create(obj);
    return;
  } else if (!Todo.filter({ id: payload.id }).exists()) {
    Todo.create(payload);
  }
};

export const addTagFromTodoCase = (payload, Todo) => {
  if (
    !Todo.withId(payload.todoId).tagsIds.filter({ name: payload.tag }).exists()
  ) {
    const obj = {
      value: payload.tag,
      label: payload.tag,
      name: payload.tag,
    };
    const fff = Todo.withId(payload.todoId);
    fff.tagsIds.add(payload.tag);
  }
};

export const deleteTagFromTodoCase = (payload, Todo) => {
  Todo.withId(payload.todoId).tagsIds.remove(payload.tag);
};

export const deleteTodoCase = (payload, Todo) => {
        Todo.withId(payload).delete();
}
