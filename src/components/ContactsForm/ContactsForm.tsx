import ContactsFormField from "../ContactsFormField/ContactsFormField";
import ContactsFormServices from "../ContactsFormServices/ContactsFormServices";
import { contactsFormFields } from "../../data";
import style from "./contactsform.module.scss";
import ContactsFormBigField from "../ContactsFormBigField/ContacrsFormBigField";
import ContactsFormCheckbox from "../ContactsFormCheckbox/ContactsFormCheckbox";

const ContactsForm = () => {
    return (
      <section className={style.items}>
        <div className={style.content}>
          <h3 className={style.title}>Ready to get started?</h3>
          <form action="#" className={style.form}>
            <ContactsFormServices />
            <div className={style.fields}>
              {contactsFormFields.map((item) => (
                <ContactsFormField key={item.id} {...item} />
              ))}
            </div>
            <ContactsFormBigField />
            <div className={style.buttons}>
              <ContactsFormCheckbox />
              <button type="submit" className={style.button}>Request a proposal</button>
            </div>
          </form>
        </div>
        <div className={style.imgItem}>
          <img
            src="./image/contacts/form-main.png"
            alt="a man in green shirt runs"
          />
        </div>
      </section>
    );
}
 
export default ContactsForm;