import { useSelector } from "react-redux";
import { useTitleForTodosCount } from "../../hooks/useTitle";
import { getUserSelector } from "../../store/selectors/userSelector";
import { wordEndingChoice } from "../../utilites/wordEndingChoice";
import s from "./StateTitle.module.css";

const StateTitle = () => {
  const state = useSelector((state) => state);
  const user = getUserSelector(state);
  const count = useTitleForTodosCount(user, state);

  const getTitle = () => {
    let phrase;
    let endphrase = null;
    if (user) {
      phrase = user.name === "All" ? "" : "У пользователя";

      if (count) {
        endphrase = ' ' + count + " " + wordEndingChoice(count, "задач");
      } else endphrase =  "  нет задач";
    } else phrase = "Выберите пользователя";

    const newName = (user) => {
      if(user) {
        return user.name === 'All' ? 'Все пользователи :' : user.name
      }
    }

    return (
      <p>
        {phrase + " "}
        <span className={s.name}>{newName(user)}</span>
        {endphrase && endphrase}
      </p>
    );
  };

  return <h1 className={s.title}>{getTitle()}</h1>;
};

export default StateTitle;
