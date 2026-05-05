import type { TPropsElement } from "../../types";
import style from "./herotitleblock.module.scss";


const HeroTitleblock = ({children}:TPropsElement) => {
    return ( <div className={style.titleBlock}>{children}</div> );
}
 
export default HeroTitleblock;