import s from "./App.module.css";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import Logo from "./components/Logo/Logo";
import SelectUserForm from "./components/SelectUserForm/SelectUserForm";
import SortForm from "./components/SortForm/SortForm";
import StateTitle from "./components/StateTitle/StateTitle";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className={s.app}>
      <div className={s.forms}>
        <Logo />
        <AddUserForm />
        <SelectUserForm />
        <AddTodoForm />
        <SortForm />
      </div>
      <div>
        <StateTitle />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
