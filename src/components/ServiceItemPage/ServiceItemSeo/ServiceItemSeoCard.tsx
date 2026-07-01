import type React from "react";
import style from "./serviceitemseo.module.scss";
import type { IPropsServiceSeo } from "../../../types";

const ServiceItemSeoCard:React.FC<IPropsServiceSeo> = ({img, alt, title, text}) => {
    return ( 
        <div className={style.card}>
            <img src={img} alt={alt} className={style.image}/>
            <h4 className={style.cardTitle}>{title}</h4>
            <p className={style.cardText}>{text}</p>
        </div>
     );
}
 
export default ServiceItemSeoCard;