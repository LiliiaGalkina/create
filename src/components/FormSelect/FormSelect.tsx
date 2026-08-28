import type React from "react";
import style from "./formselect.module.scss";
import type { IPropsFormSelect } from "../../types";
import { useState, type ChangeEvent } from "react";

const FormSelect:React.FC<IPropsFormSelect> = ({label, options, isRequired}) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

    return (
      <div className={style.fieldBlock}>
        <label htmlFor="field" className={style.label}>
          {label}
        </label>
        <select
          name="field"
          id="field"
          value={value}
          onChange={handleChange}
          required={isRequired}
          className={style.field}
        >
          <option value="" disabled hidden>
            Choose...
          </option>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
}
 
export default FormSelect;