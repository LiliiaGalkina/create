import React from "react";
import style from "./contactsformservices.module.scss";
import type { IPropsContactsFormService } from "../../types";


const ContactsFormService: React.FC<IPropsContactsFormService> = ({
  id,
  value,
  name,
  isChecked,
  onSelect,
}) => {
  
  const handleChange = () => {
    if (!isChecked) {
      onSelect();
    }
  };

  return (
    <div className={`${style.radioContainer} ${isChecked ? style.active : ""}`}>
      <label
        htmlFor={value}
        className={style.label}
      >
        {name}
      </label>
      <input
        type="radio"
        name="services"
        id={id.toString()} 
        value={value}
        checked={isChecked}
        onChange={handleChange}
        className={style.radio}
      />
    </div>
  );
};

export default ContactsFormService;
