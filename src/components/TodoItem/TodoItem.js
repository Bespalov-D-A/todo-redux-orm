import {useDispatch} from "react-redux";
import s from "./TodoItem.module.css";

const TodoItem = (props) => {
  const dispatch = useDispatch()
  const { title, description, id } = props;

  const deleteTodo = () => {
    dispatch({type: 'DELETE_TODO', payload: id})
  }

  return (
    <div className={s.todo}>
      <div className={s.delete} onClick={deleteTodo}>DEL</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default TodoItem;
