import {useSelector} from "react-redux";
import s from "./App.module.css";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import Logo from "./components/Logo/Logo";
import SelectUserForm from "./components/SelectUserForm/SelectUserForm";
import SortForm from "./components/SortForm/SortForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const state = useSelector(state => state)
  // @ts-ignore

  return (
    <div className={s.app}>
      <div className={s.forms}>
        <Logo />
        <AddUserForm />
        <SelectUserForm />
        <AddTodoForm />
        <SortForm />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
