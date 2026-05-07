import type React from "react";
import style from "./casecard.module.scss";
import type { IPropsCaseCards } from "../../types";

const CaseCard: React.FC<IPropsCaseCards> = ({id, imgmain, altmain, imglogo, altlogo,   title, circle1, circle2, digit1, digit2, description1, description2, text}) => {
    return (
      <div className={style.card}>
        <img
          src={imgmain}
          alt={altmain}
          className={style.image}
          style={{ filter: id === 2 ? "brightness(50%)" : "brightness(100%)" }}
        />
        <div className={style.label}>
          <img src={imglogo} alt={altlogo} className={style.logo} />
          <h3 className={style.title}>{title}</h3>
        </div>
        <div className={style.body}>
          <div className={style.up}>
            <div className={style.item}>
              {circle1 && (
                <img src={circle1} alt="circle" className={style.circle} />
              )}
              <p className={style.info}>
                <span className={style.digit}>{digit1}</span>
                <span className={style.desc}>{description1}</span>
              </p>
            </div>
            <div className={style.item}>
              {circle2 && (
                <img src={circle2} alt="circle" className={style.circle} />
              )}
              <p className={style.info}>
                <span className={style.digit}>{digit2}</span>
                <span className={style.desc}>{description2}</span>
              </p>
            </div>
          </div>
          <div className={style.down}>
            <p className={style.text}>{text}</p>
            <a href="#" className={style.link}>
              <span>View case</span>
              <img
                src="./image/casestudies/arrow-right.svg"
                alt="arrow right"
              />
            </a>
          </div>
        </div>
      </div>
    );
}
 
export default CaseCard;