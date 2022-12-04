export const addTagCase = (payload, Tag) => {
  if (!Tag.filter({ name: payload }).exists()) {
    let obj = { value: payload, label: payload, name: payload };
    Tag.create(obj);
  }
};

export const deleteTagCase = (payload, Tag) => {
        Tag.withId(payload).delete();
}
