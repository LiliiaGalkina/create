import { Link } from "react-router-dom";
import style from "./crumbs.module.scss";
import type React from "react";
import type { crumbsProps } from "../../types";

const Crumbs:React.FC<crumbsProps> = ({name}) => {
    return ( 
        <div className={style.crumbs}>
         <Link to={"/"} className={style.home}> <img src="./image/crumbs-home.png" alt="home icon" />
         </Link>
         <img src="./image/crumbs-chevron.svg" alt="chevron icon" />
         <p className={style.text}>{name}</p>
        </div>
     );
}
 
export default Crumbs;