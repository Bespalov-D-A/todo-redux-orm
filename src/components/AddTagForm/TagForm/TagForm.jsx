import BaseBtn from "../../UI/buttons/BaseBtn/BaseBtn";
import BaseInput from "../../UI/inputs/BaseInput/BaseInput";
import s from "./TagForm.module.css";

const TagForm = (props) => {
  const { setFunc, type, close, value, onChange, placeholder } = props;

  return (
    <div className={s["tag-form"]}>
      <div className={s.wrap}>
        <BaseInput
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
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
