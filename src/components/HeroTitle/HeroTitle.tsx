import type React from "react";
import style from "./herotitle.module.scss";
import type { heroTitleProps } from "../../types";

const HeroTitle:React.FC<heroTitleProps> = ({title}) => {
    return ( 
        <h2 className={style.title}>{title}</h2>
     );
}
 
export default HeroTitle;