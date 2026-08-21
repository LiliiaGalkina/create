import FormField from "../FormField/FormField";
import ContactsFormServices from "../ContactsFormServices/ContactsFormServices";
import { contactsFormFields } from "../../data";
import style from "./contactsform.module.scss";
import FormBigField from "../FormBigField/FormBigField";
import FormCheckbox from "../FormCheckbox/FormCheckbox";

const ContactsForm = () => {
  return (
    <section className={style.items}>
      <div className={style.content}>
        <h3 className={style.title}>Ready to get started?</h3>
        <form action="#" className={style.form}>
          <ContactsFormServices />
          <div className={style.fields}>
            {contactsFormFields.map((item) => (
              <FormField key={item.id} {...item} />
            ))}
          </div>
          <FormBigField
            label="Additional Details"
            text="Your message"
            isRequired={true}
          />
          <div className={style.buttons}>
            <FormCheckbox label="I agree to receive communications from Createx SEO Agency" />
            <button
              type="submit"
              title="not implemented"
              className={style.button}
            >
              Request a proposal
            </button>
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
};

export default ContactsForm;
