import { useState } from "react";
import { useDispatch } from "react-redux";
import BaseBtn from "../UI/buttons/BaseBtn/BaseBtn";
import BaseInput from "../UI/inputs/BaseInput/BaseInput";
import s from "./AddUserForm.module.css";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const addUserFunc = () => {
    if (name.length === 0) return;
    dispatch({ type: "ADD_USER", payload: { id: null, name } });
    setName("");
  };

  return (
    <div className={s.form}>
      <h4>ДОБАВИТЬ ПОЛЬЗОВАТЕЛЯ</h4>
      <BaseInput type="text" value={name} onChange={setName} />
      <BaseBtn color='dark-secondary' style={"classic"} value={"добавить"} onClick={addUserFunc} />
    </div>
  );
};

export default AddUserForm;
