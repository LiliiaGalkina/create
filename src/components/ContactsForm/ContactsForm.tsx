import ContactsFormServices from "../ContactsFormServices/ContactsFormServices";
import style from "./contactsform.module.scss";

const ContactsForm = () => {
    return (
      <div className={style.items}>
        <div className={style.content}>
          <h3 className={style.title}>Ready to get started?</h3>
          <form action="#" className={style.form}>
            <ContactsFormServices/>
          </form>
        </div>
        <div className={style.imgItem}>
          <img
            src="./image/contacts/form-main.png"
            alt="a man in green shirt runs"
          />
        </div>
      </div>
    );
}
 
export default ContactsForm;