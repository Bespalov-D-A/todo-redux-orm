import { useDispatch, useSelector } from "react-redux";
import {
  getUserSelector,
  userSelector,
} from "../../store/selectors/userSelector";
import {setSelectedUserId} from "../../store/slices/userSlice";
import BaseSelect from "../UI/selects/BaseSelect/BaseSelect";
import s from "./SelectUserForm.module.css";

const SelectUserForm = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const users = userSelector(state)
  const user = getUserSelector(state);

  const setUserFunc = (e) => {
    dispatch(setSelectedUserId(e.target.value));
  };

  return (
    <div className={s.form}>
      <h4>ВЫБРАТЬ ПОЛЬЗОВАТЕЛЯ</h4>
      <BaseSelect
        handleChange={setUserFunc}
        value={user}
        options={[{name: 'All', id: 'All'}, ...users]}
        attrValue={"id"}
        attrName={"name"}
      />
    </div>
  );
};

export default SelectUserForm;
