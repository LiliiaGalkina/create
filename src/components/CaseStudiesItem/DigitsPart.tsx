import type React from "react";
import style from "./casestydiesitem.module.scss";

interface IPropsDigits {
    img1: string;
    img2: string;
    digit1:string;
    digit2: string;
    description1: string;
    description2:string;
}

const DigitsPart:React.FC<IPropsDigits> = ({img1, img2, digit1, digit2, description1, description2}) => {
    return (
      <div className={style.digits}>
        <div className={style.digitsItem}>
          <img src={img1} alt="colored circle" className={style.digitImg} />
          <div className={style.info}>
            <span className={style.digit}>{digit1}</span>
            <span className={style.description}>{description1}</span>
          </div>
        </div>
        <div className={style.digitsItem}>
          <img src={img2} alt="colored circle" className={style.digitImg} />
          <div className={style.info}>
            <span className={style.digit}>{digit2}</span>
            <span className={style.description}>{description2}</span>
          </div>
        </div>
        <div className={style.digitsItem}>
          <div className={style.info}>
            <span className={style.digit}>8,000</span>
            <span className={style.description}>DAU</span>
          </div>
        </div>
      </div>
    );
}
 
export default DigitsPart;