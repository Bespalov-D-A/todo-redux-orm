import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosByTag } from "../../store/selectors/todoSelector";
import { getUserSelector } from "../../store/selectors/userSelector";
import { setTitle } from "../../store/slices/commonSlice";
import List from "../common/List/List";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.css";

const TodoList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // @ts-ignore
  const selectedTag = useSelector((state) => state.todoSlice.selectedTag);
  // @ts-ignore
  const selectedUserId = useSelector((state) => state.userSlice.selectedUserId);

  const getTodos = useMemo(() => {
    return  getTodosByTag(state);
    // @ts-ignore
  }, [selectedTag, selectedUserId, state]);

  const getList = () => {
    if (getTodos.length > 0) {
            return (
        <List
          items={getTodos}
          renderItem={(todo) => (
            <TodoItem
              key={todo.id}
              title={todo.title}
              description={todo.description}
              id={todo.id}
            />
          )}
        />
      );
    } else {
      return "";
    }
  };

  return (
    <div className={s["todo-list"]}>{Array.isArray(getTodos) && getList()}</div>
  );
};

export default TodoList;
