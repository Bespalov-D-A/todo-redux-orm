import { useSelector } from "react-redux";
import { getTodosByUserId } from "../../store/selectors/todoSelector";
import List from "../common/List/List";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.css";

const TodoList = (props) => {
  const state = useSelector((state) => state);
  const todos = getTodosByUserId(state);

  const getList = () => {
    if (todos.length > 0)
      return (
        <List
          items={todos}
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
    else return "У выбранного юзера нет задач";
  };

  return (
    <div className={s["todo-list"]}>
      {Array.isArray(todos) ? getList() : todos}
    </div>
  );
};

export default TodoList;
