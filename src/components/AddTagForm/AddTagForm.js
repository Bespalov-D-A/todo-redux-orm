import { useState } from "react";
import {useDispatch} from "react-redux";
import BaseBtn from "../UI/buttons/BaseBtn/BaseBtn";
import BaseInput from "../UI/inputs/BaseInput/BaseInput";
import s from "./AddTagForm.module.css";
import TagForm from "./TagForm/TagForm";

const AddTagUserForm = (props) => {
  const {todoId} = props
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(false);
  const [tag, setTag] = useState("");

  const onClickFunc = () => {
    setIsActive(true);
  };

  const close = () => {
    setIsActive(false)
    setTag('')
  }

  const setTagFunc = () => {
    setIsActive(false)
    dispatch({type: 'ADD_TAG', payload: tag})
    dispatch({type: 'ADD_TAG_FROM_TODO', payload: {tag, todoId}})
    setTag('')
  }

  return (
    <div className={s.form}>
      {isActive ? (
        <TagForm
          setFunc={setTagFunc}
          type="text"
          value={tag}
          onChange={setTag}
          placeholder="Название тега"
          close={close}
        />
      ) : (
        <BaseBtn onClick={onClickFunc} value="Добавить тэг" style="classic" />
      )}
    </div>
  );
};

export default AddTagUserForm;
