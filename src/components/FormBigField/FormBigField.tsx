import { useState } from "react";
import style from "./formbigfield.module.scss";
import type { IPropsFormField } from "../../types";

const FormBigField: React.FC<IPropsFormField> = ({ label, text, isRequired }) => {
  const [value, setValue] = useState("");

  return (
    <div className={style.fieldBlock}>
      <label htmlFor="details" className={style.label}>
        {label}
      </label>
      <textarea
        name="details"
        id="details"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={text}
        className={style.field}
        required={isRequired}
      ></textarea>
    </div>
  );
};
 
export default FormBigField;