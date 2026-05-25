import style from "./contactsherocards.module.scss";
import { contactsHeroCards } from "../../data";
import ContactsHeroCard from "../ContactsHeroCard/ContactsHeroCard";

const ContactsHeroCards = () => {
  return (
    <div className={style.cards}>
      {contactsHeroCards.map((card, index) => (
        <>
          <ContactsHeroCard key={card.id} {...card} />
          {index < contactsHeroCards.length - 1 && (
            <div className={style.separator}/>
          )}
        </>
      ))}
    </div>
  );
};

export default ContactsHeroCards;
