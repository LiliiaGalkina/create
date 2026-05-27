import { useState } from "react";
import style from "./contactsformservices.module.scss";
import { contactsRadioButtons } from "../../data";
import ContactsFormService from "./ContactsFormService";

const ContactsFormServices = () => {
  const [selectedValue, setSelectedValue] = useState(
    contactsRadioButtons[0]?.id || null,
  );

  return (
    <div className={style.services}>
      <h4 className={style.title}>Услуги</h4>
      <div className={style.radios}>
        {contactsRadioButtons.map((option) => (
          <ContactsFormService
            key={option.id}
            item={option}
            isChecked={selectedValue === option.id}
            onSelect={() => setSelectedValue(option.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsFormServices;
