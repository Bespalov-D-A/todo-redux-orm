import {useMemo} from "react"
import {useSelector} from "react-redux"
import {orm} from "../store/models"

export const useGetUserNameFromTodo = (id) => {
  const state = useSelector(state => state)

  //Получаем юзера текущей тодушки
  const user = useMemo(()=> {
    // @ts-ignore
    const session = orm.session(state.ormReducer) 
    // @ts-ignore
    // Получаем текущую тодо
    const thisTodoModel =  session.Todo.withId(id)
    //Получаем ее юзера(создателя)
    return thisTodoModel.user.ref
  }, [id])

  return user
}
