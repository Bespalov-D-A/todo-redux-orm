import { useMemo } from "react";
import { useSelector } from "react-redux";
import { orm } from "../store/models";

export const useGetTagsFromTodo = (id) => {
  const state = useSelector((state) => state);
  // @ts-ignore
  const session = orm.session(state.ormReducer);
  const thisModel = session.Todo.all().filter({ id }).first();
  const count = thisModel.tagsIds.count();
  const getTags = useMemo(() => {
    return thisModel.tagsIds.toRefArray();
  }, [count]);

  return getTags;
};
