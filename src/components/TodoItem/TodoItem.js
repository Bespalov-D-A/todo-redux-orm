import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetTagsFromTodo } from "../../hooks/useGetTagsFormTodo";
import { useGetUserNameFromTodo } from "../../hooks/useGetUserNameFromTodo";
import AddTagForm from "../AddTagForm/AddTagForm";
import TagList from "../TagList/TagList";
import s from "./TodoItem.module.css";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const { title, description, id } = props;

  const deleteTodo = () => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const user = useGetUserNameFromTodo(id);

  return (
    <div className={s.todo}>
      <div className={s.delete} onClick={deleteTodo}>
        DEL
      </div>
      <p className={s.name}>
        Задача для <b>{user.name}</b>
      </p>
      <hr />
      <h4>{title}</h4>
      <p>{description}</p>
      <TagList todoId={id} tags={useGetTagsFromTodo(id)} />
      <div className={s.tag}>
        <AddTagForm todoId={id} />
      </div>
    </div>
  );
};

export default TodoItem;
