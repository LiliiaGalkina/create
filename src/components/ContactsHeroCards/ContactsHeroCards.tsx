import style from "./contactsherocards.module.scss";
import { contactsHeroCards } from "../../data";
import ContactsHeroCard from "../ContactsHeroCard/ContactsHeroCard";

const ContactsHeroCards = () => {
  return (
    <div className={style.cards}>
		  {contactsHeroCards.map((card, index) => <ContactsHeroCard {...card} key={index} />)}
    </div>
  );
};

export default ContactsHeroCards;
