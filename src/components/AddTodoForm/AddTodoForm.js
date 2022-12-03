import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BaseBtn from "../UI/buttons/BaseBtn/BaseBtn";
import BaseInput from "../UI/inputs/BaseInput/BaseInput";
import s from "./AddTodoForm.module.css";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const selectedUserId = useSelector((state) => state.userSlice.selectedUserId);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createTodoFunc = () => {
    setTitle("");
    setDescription("");
    dispatch({
      type: "ADD_TODO",
      payload: { title, description, userId: selectedUserId },
    });
  };

  return (
    <div className={s.form}>
      <h3>СОЗДАТЬ ЗАДАЧУ</h3>
      <BaseInput value={title} onChange={setTitle} type="text" />
      <BaseInput value={description} onChange={setDescription} type="text" />
      <BaseBtn
        style="classic"
        value="Создать задачу"
        onClick={createTodoFunc}
      />
    </div>
  );
};

export default AddTodoForm;
