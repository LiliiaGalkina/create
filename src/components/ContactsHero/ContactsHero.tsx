import ContactsHeroCards from "../ContactsHeroCards/ContactsHeroCards";
import Crumbs from "../Crumbs/Crumbs";
import HeroPagesDecors from "../HeroPagesDecors/HeroPagesDecors";
import HeroTitle from "../HeroTitle/HeroTitle";
import HeroTitleblock from "../HeroTitleBlock/HeroTitleblock";
import style from "./contactshero.module.scss";

const ContactsHero = () => {
  return (
    <div className={style.hero}>
      <HeroPagesDecors
        shapesClass="contactsDecorShapesUp"
        linesUpClass="contactsDecorLinesUp"
      />
      <div className="container">
        <HeroTitleblock>
          <Crumbs name="Contacts" />
          <HeroTitle title="Contacts" />
        </HeroTitleblock>
        <ContactsHeroCards />
      </div>
    </div>
  );
};

export default ContactsHero;
