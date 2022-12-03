import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BaseBtn from "../UI/buttons/BaseBtn/BaseBtn";
import s from "./AddTagForm.module.css";
import TagForm from "./TagForm/TagForm";

const AddTagForm = (props) => {
  const { todoId } = props;
  const dispatch = useDispatch();
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
    if (!e) tagRef.current = "";
    else tagRef.current = e;
  };

  const setTagFunc = () => {
    const ref = tagRef.current;
    if (!ref || ref === "") {
      setIsActive(false);
      return;
    }
    dispatch({ type: "ADD_TAG", payload: ref });
    dispatch({
      type: "ADD_TAG_FROM_TODO",
      payload: { tag: ref, todoId },
    });
    setIsActive(false);
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
          tagRef={tagRef}
        />
      ) : (
        <BaseBtn onClick={onClickFunc} value="Добавить тэг" style="classic" color='dark-primary' />
      )}
    </div>
  );
};

export default AddTagForm;
