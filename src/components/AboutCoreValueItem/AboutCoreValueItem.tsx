import type React from "react";
import style from "./aboutcorevalueitem.module.scss";
import type { IPropsCoreValuesItems } from "../../types";

const AboutCoreValueItem: React.FC<IPropsCoreValuesItems> = ({image, alt, title, text}) => {
    return ( 
        <div className={style.card}>
            <img src={image} alt={alt} className={style.icon}/>
            <h4 className={style.title}>{title}</h4>
            <p className={style.text}>{text}</p>
        </div>
     );
}
 
export default AboutCoreValueItem;