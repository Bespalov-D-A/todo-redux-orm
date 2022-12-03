import { createSelector } from "redux-orm";
import {equalStrOnArr} from "../../utilites/isEqualStrOnArr";
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

//выводим только те тудушки, которыe в tagsIds(реляционное поле)
//имеют выбранный пользователем тег(selectedTag)
//если тег не выбран выводим все тудушки
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
        if (selectedTag &&
          thisTodo
            .first()
            .tagsIds.toRefArray()
            .find((el) => equalStrOnArr(el.name, selectedTag) )
        ) newArr.push(thisTodo);
        else if(!selectedTag) newArr.push(thisTodo)
      }
      // @ts-ignore
      const remapArr = newArr.map((item) => item.first().ref);
      return remapArr;
    }
  }
);
