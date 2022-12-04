import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ADD_TODO} from "../../store/models/constants/todoConstants";
import BaseBtn from "../UI/buttons/BaseBtn/BaseBtn";
import BaseInput from "../UI/inputs/BaseInput/BaseInput";
import s from "./AddTodoForm.module.css";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const user = useSelector(state => state.userSlice.selectedUserId)
  // @ts-ignore
  const selectedUserId = useSelector((state) => state.userSlice.selectedUserId);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createTodoFunc = () => {
    setTitle("");
    setDescription("");
    dispatch({
      type: ADD_TODO,
      payload: { title, description, userId: selectedUserId },
    });

  };
  return (
    <div className={s.form}>
      <h4>СОЗДАТЬ ЗАДАЧУ</h4>
      <BaseInput value={title} onChange={setTitle} type="text" />
      <BaseInput value={description} onChange={setDescription} type="text" />
      <BaseBtn
        style="classic"
        color="dark-secondary"
        value="Создать задачу"
        onClick={createTodoFunc}
        disabled={user === 'All' ? true : false}
      />
    </div>
  );
};

export default AddTodoForm;
