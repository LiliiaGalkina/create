import type React from "react";
import style from "./herotitle.module.scss";
import type { TPropsHeroTitle } from "../../types";

const HeroTitle:React.FC<TPropsHeroTitle> = ({title}) => {
    return ( 
        <h2 className={style.title}>{title}</h2>
     );
}
 
export default HeroTitle;