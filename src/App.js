import {useSelector} from "react-redux";
import s from "./App.module.css";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import SelectUserForm from "./components/SelectUserForm/SelectUserForm";
import TodoList from "./components/TodoList/TodoList";
import {orm} from "./store/models";

function App() {
  const state = useSelector(state => state)
  // @ts-ignore
  const session = orm.session(state.ormReducer)
  //console.log(session.Tag.all().first().todos.toRefArray())
  //console.log(session.Tag.all().first().ref)

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
