import { useState } from "react";
import style from "./contactsformbigfield.module.scss";

const ContactsFormBigField = () => {
  const [value, setValue] = useState("");

    return (
      <div className={style.fieldBlock}>
        <label htmlFor="details" className={style.label}>
          Additional Details
        </label>
        <textarea
          name="details"
          id="details"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={style.field}
        ></textarea>
      </div>
    );
}
 
export default ContactsFormBigField;