import {useMemo} from "react";
import { useSelector } from "react-redux";
import { getTodosByTag, getTodosByUserId } from "../../store/selectors/todoSelector";
import List from "../common/List/List";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.css";

const TodoList = (props) => {
  const state = useSelector((state) => state);
  // @ts-ignore
  const selectedTag = useSelector(state => state.todoSlice.selectedTag)
  // @ts-ignore
  const selectedUserId = useSelector(state => state.userSlice.selectedUserId)

  const getTodos = useMemo(()=> {
      return getTodosByTag(state)
  // @ts-ignore
  }, [selectedTag, selectedUserId, state])

  const getList = () => {
    if (getTodos.length > 0)
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
    else return <>У выбранного юзера нет задач</>
  };

  return (
    <div className={s["todo-list"]}>
      {Array.isArray(getTodos) ? getList() : getTodos}
    </div>
  );
};

export default TodoList;
