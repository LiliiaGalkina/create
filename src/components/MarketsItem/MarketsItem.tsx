import type React from "react";
import style from "./marketsitem.module.scss";
import type { marketsProps } from "../../types";

const MarketsItem:React.FC<marketsProps> = ({image, alt, title, text}) => {
    return ( 
        <div className={style.card}>
            <img src={image} alt={alt} className={style.icon}/>
            <h3 className={style.title}>{title}</h3>
            <p className={style.text}>{text}</p>
        </div>
     );
}
 
export default MarketsItem;