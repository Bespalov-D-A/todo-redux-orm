import Model, { attr, fk, many } from "redux-orm";
import {addTagCase, deleteTagCase} from "../cases/tagCases";
import {ADD_TAG, DELETE_TAG} from "./constants/tagConstants";

export class Tag extends Model {
  static modelName = "Tag";
  static reducer(action, Tag, session) {
    const { payload, type } = action;
    switch (type) {
      case ADD_TAG:
       return addTagCase(payload, Tag) 
      case DELETE_TAG:
        return deleteTagCase(payload, Tag)
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
