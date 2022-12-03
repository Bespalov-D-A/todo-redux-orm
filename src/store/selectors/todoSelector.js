import { createSelector } from "redux-orm";
import { orm } from "../models";

export const getTodosByUserId = createSelector(
  orm,
  (state) => state.userSlice.selectedUserId,
  (session, selectedUserId) => {
    if (selectedUserId && selectedUserId !== "All") {
      return session.User.withId(selectedUserId).todos.toRefArray();
    } else if (selectedUserId === "All") {
      return session.Todo.all().toRefArray();
    } else return "Юзер не выбран";
  }
);


//Проверям есть создана ли хоть одна тодушка
//Если да, то выводим только те, к оторый в tagsIds(реляционное поле)
export const getTodosByTag = createSelector(
  orm,
  (state) => state,
  (state) => state.todoSlice.selectedTag,
  (session, state, selectedTag) => {
    const todos = getTodosByUserId(state);
    if (Array.isArray(todos)) {
      const newArr = [];
      for (let i = 0; i < todos.length; i++) {
        const thisTodo = session.Todo.filter({ id: todos[i].id });
        if (
          thisTodo
            .first()
            .tagsIds.toRefArray()
            .find((el) => el.name === selectedTag)
        )
          newArr.push(thisTodo);
      }
      // @ts-ignore
      const remapArr =  newArr.map(item=>item.first().ref)
      return remapArr
    }
  }
);
