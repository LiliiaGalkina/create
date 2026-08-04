import type React from "react";
import style from "./casestydiesitem.module.scss";
import type { IPropsRichText } from "../../types";

const RichText:React.FC<IPropsRichText> = ({type, text}) => {
    return ( 
    <p className={type === "rich_text" ? style.boldText : style.simpleText}>{text}</p> 
);
}
 
export default RichText;