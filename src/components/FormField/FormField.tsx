import type React from "react";
import style from "./formfield.module.scss";
import type { IPropsFormField } from "../../types";
import { useState } from "react";

const FormField: React.FC<IPropsFormField> = ({
  label,
  fieldType,
  text,
  isRequired,
}) => {
  const [value, setValue] = useState("");

  return (
    <div className={style.fieldBlock}>
      <label htmlFor="field" className={style.label}>
        {label}
      </label>
      <input
        type={fieldType}
        id="field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={style.field}
        placeholder={text}
        required={isRequired}
      />
    </div>
  );
};

export default FormField;
