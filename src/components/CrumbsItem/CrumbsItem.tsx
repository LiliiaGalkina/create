import { Link } from "react-router-dom";
import style from "./crumbsitem.module.scss";
import type React from "react";
import type {TPropsCrumbsItem } from "../../types";

const CrumbsItem:React.FC<TPropsCrumbsItem> = ({parent, name, link}) => {
    return (
      <div className={style.crumbs}>
        <Link to={"/"} className={style.home}>
          <img src="./image/crumbs-home.png" alt="home icon" />
        </Link>
        <img src="./image/crumbs-chevron.svg" alt="chevron icon" />
        <Link to={`/${link}`} className={style.parent}>
          {parent}
        </Link>
        <img src="./image/crumbs-chevron.svg" alt="chevron icon" />
        <p className={style.text}>{name}</p>
      </div>
    );
}
 
export default CrumbsItem;