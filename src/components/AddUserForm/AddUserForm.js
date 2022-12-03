import { useState } from "react";
import { useDispatch } from "react-redux";
import BaseBtn from "../UI/buttons/BaseBtn/BaseBtn";
import BaseInput from "../UI/inputs/BaseInput/BaseInput";
import s from "./AddUserForm.module.css";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const addUserFunc = () => {
    if(name.length === 0) return
    dispatch({ type: "ADD_USER", payload: { id: null, name } });
    setName("");
  };

  return (
    <div className={s.form}>
      <h3>ДОБАВИТЬ ПОЛЬЗОВАТЕЛЯ</h3>
      <BaseInput type="text" value={name} onChange={setName} />
      <BaseBtn style={"classic"} value={"add"} onClick={addUserFunc} />
    </div>
  );
};

export default AddUserForm;
