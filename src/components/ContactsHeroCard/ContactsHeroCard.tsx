import type React from "react";
import style from "./contactsherocard.module.scss";
import type { IPropsContactsHeroCards } from "../../types";

const ContactsHeroCard: React.FC<IPropsContactsHeroCards> = ({
  id,
  image,
  alt,
  title,
  text1,
  text2,
  link,
}) => {
  return (
    <div className={style.card}>
      <div className={style.content}>
        <img src={image} alt={alt} className={style.image} />
        <div className={style.info}>
          <h4 className={style.subtitle}>{title}</h4>
          <span className={style.text}>{text1}</span>
          {text2 && <span className={style.text}>{text2}</span>}
          {link && (
            <a href="#" className={style.link}>
              {link}
            </a>
          )}
        </div>
      </div>
     { id < 4 && <div className={style.separator}></div>}
    </div>
  );
};

export default ContactsHeroCard;
