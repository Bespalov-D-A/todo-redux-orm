import s from "./App.module.css";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import SelectUserForm from "./components/SelectUserForm/SelectUserForm";

function App() {
  return (
    <div className={s.app}>
      <AddUserForm />
      <SelectUserForm />
    </div>
  );
}

export default App;
