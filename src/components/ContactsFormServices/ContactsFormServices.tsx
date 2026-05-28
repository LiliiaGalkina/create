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
        {contactsRadioButtons.map((item) => (
          <ContactsFormService
            key={item.id}
            {...item}
            isChecked={selectedValue === item.id}
            onSelect={() => setSelectedValue(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsFormServices;
