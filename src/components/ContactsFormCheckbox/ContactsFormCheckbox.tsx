import { useState } from "react";
import style from "./contactsformcheckbox.module.scss";

const ContactsFormCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);

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
          I agree to receive communications from Createx SEO Agency
        </label>
      </div>
    );
}
 
export default ContactsFormCheckbox;