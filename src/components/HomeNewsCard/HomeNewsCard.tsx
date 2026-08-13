import type React from "react";
import style from "./homenewscard.module.scss";
import type { IPropsHomeNews} from "../../types";

const HomeNewsCard: React.FC<IPropsHomeNews> = ({image, alt, category, date, autor, title, text}) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={image} alt={alt} />
      </div>
      <div className={style.body}>
        <div className={style.info}>
          <span className={style.category}>{category}</span>
          <div className={style.date}>
            <img src="./image/home/home-news-clock.svg" alt="clock icon" />
            <span>{date}</span>
          </div>
          <div className={style.autor}>
            <img src="./image/home/home-news-profile.svg" alt="profile icon" />
            <span>{autor}</span>
          </div>
        </div>
        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{text}</p>
      </div>
      <a href="#" className={style.link}>
        <span>Read more</span> <span className={style.arrow}> &rarr;</span>
      </a>
    </div>
  );
};
 
export default HomeNewsCard;