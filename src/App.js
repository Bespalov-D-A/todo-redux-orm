import s from "./App.module.css";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import SelectUserForm from "./components/SelectUserForm/SelectUserForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className={s.app}>
      <div className={s.forms}>
        <AddUserForm />
        <SelectUserForm />
        <AddTodoForm />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
