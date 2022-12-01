import {useMemo} from "react"
import {useSelector} from "react-redux"
import {orm} from "../store/models"

export const useGetUserNameFromTodo = (id) => {
  const state = useSelector(state => state)

  const user = useMemo(()=> {
    // @ts-ignore
    const session = orm.session(state.ormReducer) 
    return session.User.filter({id}).first().ref
  }, [id])

  return user
}
