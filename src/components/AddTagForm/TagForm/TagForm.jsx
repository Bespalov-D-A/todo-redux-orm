import BaseBtn from "../../UI/buttons/BaseBtn/BaseBtn";
import s from "./TagForm.module.css";
import { useSelector } from "react-redux";
import { orm } from "../../../store/models";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { components } from "react-select";
import { handlerClickOutside } from "../../../utilites/clickHandlerOutsideElement";

const TagForm = (props) => {
  const { setFunc, close, onChange } = props;
  const [options, setOptions] = useState();
  const state = useSelector((state) => state);
  // @ts-ignore
  const session = orm.session(state.ormReducer);
  const selectRef = useRef(null);
  const btnRef = useRef(null);

  const unFocus = () => {
    onChange("");
    close();
  };

  const onClick = (e) => {
    handlerClickOutside(e, [btnRef, selectRef], unFocus);
  };

  useEffect(() => {
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    const newOptions = session.Tag.all().toRefArray();
    // @ts-ignore
    setOptions(newOptions);
  }, []);

  const Input = (props) => {
    const newOnChange = (e) => {
      props.onChange(e);
      onChange(e.target.value);
    };
    const newProps = { ...props, onChange: (e) => newOnChange(e) };
    return <components.Input {...newProps} />;
  };

  return (
    <div className={s["tag-form"]}>
      <div className={s.wrap}>
        <div ref={selectRef}>
          <Select
            components={{ Input }}
            // @ts-ignore
            onChange={(e) => onChange(e.value)}
            options={options}
          />
        </div>

        <div className={s.cansle} onClick={close}>
          &#10006;
        </div>
      </div>
      <BaseBtn btnRef={btnRef} value="" style="ok" onClick={setFunc} />
    </div>
  );
};

export default TagForm;
