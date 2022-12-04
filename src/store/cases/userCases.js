export const addUserCase = (action, User, session) => {
  if (!action.payload.id) {
    let id = session.User.all().toRefArray().length + 1;
    let obj = { ...action.payload, id };
    User.create(obj);
    return;
  }
  if (!User.filter({ id: action.payload.id }).exists()) {
    User.create(action.payload);
  }
};
