import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BaseBtn from "../UI/buttons/BaseBtn/BaseBtn";
import s from "./AddTagForm.module.css";
import TagForm from "./TagForm/TagForm";

const AddTagForm = (props) => {
  const { todoId } = props;
  const dispatch = useDispatch();
  // @ts-ignore
  const [isActive, setIsActive] = useState(false);
  const tagRef = useRef();

  const onClickFunc = () => {
    setIsActive(true);
  };

  const close = () => {
    setIsActive(false);
  };

  const setValTagFunc = (e) => {
    // @ts-ignore
    tagRef.current = { value: e };
  };

  const setTagFunc = () => {
    setIsActive(false);
    const ref = tagRef.current;
    // @ts-ignore
    dispatch({ type: "ADD_TAG", payload: ref.value });
    dispatch({
      type: "ADD_TAG_FROM_TODO",
      // @ts-ignore
      payload: { tag: ref.value, todoId },
    });
  };

  return (
    <div className={s.form}>
      {isActive ? (
        <TagForm
          setFunc={setTagFunc}
          type="text"
          onChange={setValTagFunc}
          placeholder="Название тега"
          close={close}
        />
      ) : (
        <BaseBtn onClick={onClickFunc} value="Добавить тэг" style="classic" />
      )}
    </div>
  );
};

export default AddTagForm;
