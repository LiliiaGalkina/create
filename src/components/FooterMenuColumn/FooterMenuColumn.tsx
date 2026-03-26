import style from "./footermenucolumn.module.scss";
import { menuItemsFooter } from "../../data";
import type React from "react";
import type { menuFooterProps } from "../../types";

const FooterMenuColumn:React.FC<menuFooterProps> = ({title, min, max}) => {
    return (
        <div className={style.column}>
            <h3 className={style.title}>{title}</h3>
            <ul className={style.list}>
                {menuItemsFooter.slice(min, max).map((item) => (
                    <li key={item.id}><a href="#" className={style.link}>{item.name}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default FooterMenuColumn;