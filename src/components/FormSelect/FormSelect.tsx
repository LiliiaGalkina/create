import type React from "react";
import style from "./formselect.module.scss";
import type { IPropsFormSelect } from "../../types";

const FormSelect:React.FC<IPropsFormSelect> = ({label, options, isRequired}) => {
    return (
      <div className={style.fieldBlock}>
        <label htmlFor="field" className={style.label}>
          {label}
        </label>
        <select name="field" id="field" required={isRequired} className={style.field}>
          <option value="Choose..." disabled selected hidden></option>
          {options.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      </div>
    );
}
 
export default FormSelect;