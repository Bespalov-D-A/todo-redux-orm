import { useDispatch, useSelector } from "react-redux";
import {
  getUserSelector,
  userSelector,
} from "../../store/selectors/userSelector";
import {setSelectedUserId} from "../../store/slices/userSlice";
import BaseSelect from "../UI/selects/BaseSelect/BaseSelect";
import s from "./SelectUserForm.module.css";

const SelectUserForm = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const users = userSelector(state).all().toRefArray();

  const setUserFunc = (e) => {
    dispatch(setSelectedUserId(e.target.value));
  };

  const user = getUserSelector(state);
  //console.log(user);

  return (
    <div className={s.form}>
      <h3>SELECT USER</h3>
      <BaseSelect
        handleChange={setUserFunc}
        value={user}
        options={users}
        attrValue={"id"}
        attrName={"name"}
      />
    </div>
  );
};

export default SelectUserForm;
