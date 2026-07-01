import type React from "react";
import style from "./howitworks.module.scss";
import type { IPropsHowItWorks } from "../../../types";

const HowItWorksItem:React.FC<IPropsHowItWorks> = ({headline, subtitle, text, dopClass}) => {
    return (
      <div className={`${style.item} ${style[dopClass]}`}>
        <strong className={style.headline}>{headline}</strong>
        <h4 className={style.subtitle}>{subtitle}</h4>
        <p className={style.text}>{text}</p>
      </div>
    );
}
 
export default HowItWorksItem;