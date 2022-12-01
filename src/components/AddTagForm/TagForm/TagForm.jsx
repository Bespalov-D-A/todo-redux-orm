import BaseBtn from "../../UI/buttons/BaseBtn/BaseBtn";
import BaseInput from "../../UI/inputs/BaseInput/BaseInput";
import s from "./TagForm.module.css";
import { useSelector } from "react-redux";
import { orm } from "../../../store/models";
import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

const TagForm = (props) => {
  const { setFunc, close, onChange } = props;
  const [options, setOptions] = useState();
  const state = useSelector((state) => state);
  // @ts-ignore
  const session = orm.session(state.ormReducer);

  useEffect(() => {
    const newOptions = session.Tag.all().toRefArray();
    // @ts-ignore
    setOptions(newOptions);
  }, []);

  const selectStyle = {
    control: (baseStyles) => ({
      ...baseStyles,
      width: "120px;",
    }),
  };

  return (
    <div className={s["tag-form"]}>
      <div className={s.wrap}>
        <CreatableSelect
          // @ts-ignore
          onChange={(e) => onChange(e.value)}
          getNewOptionData={onChange}
          styles={selectStyle}
          options={options}
        />

        <div className={s.cansle} onClick={close}>
          &#10006;
        </div>
      </div>
      <BaseBtn value="" style="ok" onClick={setFunc} />
    </div>
  );
};

export default TagForm;
