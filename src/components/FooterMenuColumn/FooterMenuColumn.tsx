import style from "./footermenucolumn.module.scss";
import { menuItemsFooter } from "../../data";
import type React from "react";
import type {IPropsMenuFooter} from "../../types";
import { Link } from "react-router-dom";

const FooterMenuColumn:React.FC<IPropsMenuFooter> = ({title, min, max}) => {
    return (
        <div className={style.column}>
            <h3 className={style.title}>{title}</h3>
            <ul className={style.list}>
                {menuItemsFooter.slice(min, max).map((item) => (
                    <li key={item.id}><Link to={item.link} className={style.link}>{item.name}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default FooterMenuColumn;