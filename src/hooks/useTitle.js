import {useMemo} from "react"
import {TASKS_NOT_FOUND} from "../constants/constants"
import {getTodosByUserId} from "../store/selectors/todoSelector"

export const useTitleForTodosCount = (user, state) => {

  const todos = getTodosByUserId(state)

  const getTitle = useMemo(()=> {
    if(!todos) return TASKS_NOT_FOUND
    else return todos.length
  }, [todos])
  return getTitle
}
