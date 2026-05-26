import style from "./contactsherocards.module.scss";
import { contactsHeroCards } from "../../data";
import ContactsHeroCard from "../ContactsHeroCard/ContactsHeroCard";

const ContactsHeroCards = () => {
  return (
    <div className={style.cards}>
      {contactsHeroCards.map((card) => <ContactsHeroCard {...card} />)}
    </div>
  );
};

export default ContactsHeroCards;
