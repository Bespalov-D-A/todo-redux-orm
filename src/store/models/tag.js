import Model, { attr, fk, many } from "redux-orm";

export class Tag extends Model {
  static modelName = "Tag";
  static reducer(action, Tag, session) {
    const { payload, type } = action;
    switch (type) {
      case "ADD_TAG":
        if (!Tag.filter({ name: payload }).exists()) {
          let obj = {value: payload, label: payload, name: payload };
          Tag.create(obj);
        }
        break;
      case "DELETE_TAG":
        Tag.withId(action.payload).delete();
        break;
    }
  }
}

Tag.fields = {
  name: attr(),
  value: attr(),
  label: attr()
};
Tag.options = {
  idAttribute: "name",
};
