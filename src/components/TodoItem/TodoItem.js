import { useDispatch, useSelector } from "react-redux";
import { useGetTagsFromTodo } from "../../hooks/useGetTagsFormTodo";
import { useGetUserNameFromTodo } from "../../hooks/useGetUserNameFromTodo";
import {DELETE_TODO} from "../../store/models/constants/todoConstants";
import AddTagForm from "../AddTagForm/AddTagForm";
import TagList from "../TagList/TagList";
import s from "./TodoItem.module.css";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const { title, description, id } = props;
  const user = useGetUserNameFromTodo(id);

  const deleteTodo = () => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  return (
    <div className={s.todo}>
      <div className={s.header}>
        <div className={s.delete} onClick={deleteTodo}>
          &#10006;
        </div>
        <p className={s.name}>
          Задача для <b>{user.name}</b>
        </p>
        <hr />
      </div>
      <h3 className={s.title}>{title}</h3>
      <p className={s.decription}>{description}</p>

      <div className={s.tag}>
        <TagList todoId={id} tags={useGetTagsFromTodo(id)} />
      </div>
      <div className={s['add-tag']}>
      <AddTagForm todoId={id} />
      </div>
    </div>
  );
};

export default TodoItem;
