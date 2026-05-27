import React from "react";
import style from "./contactsformservices.module.scss";
import type { IContactsFormServiceProps } from "../../types";


const ContactsFormService: React.FC<IContactsFormServiceProps> = ({
  item,
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
        htmlFor={item.value}
        className={style.label}
      >
        {item.name}
      </label>
      <input
        type="radio"
        name="services"
        id={item.id.toString()} 
        value={item.value}
        checked={isChecked}
        onChange={handleChange}
        className={style.radio}
      />
    </div>
  );
};

export default ContactsFormService;
