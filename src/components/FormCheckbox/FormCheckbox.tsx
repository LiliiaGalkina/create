import React, { useState } from "react";
import style from "./formcheckbox.module.scss";
import type { TPropsFormCheckBox } from "../../types";



const FormCheckbox:React.FC<TPropsFormCheckBox> = ({label}) => {
    const [isChecked, setIsChecked] = useState(true);

    const handleChange = () => {
      setIsChecked(!isChecked);
    };

    return (
      <div className={style.block}>
        <input
          type="checkbox"
          id="check"
          className={style.check}
          checked={isChecked}
          onChange={handleChange}
        />
        <label htmlFor="check" className={style.label}>
         {label}
        </label>
      </div>
    );
}
 
export default FormCheckbox;