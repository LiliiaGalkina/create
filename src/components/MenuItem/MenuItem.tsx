import type React from "react";
import style from "./menuitem.module.scss";
import type { menuProps } from "../../types";

const MenuItem: React.FC<menuProps> = ({name}) => {
    return (
        <a href="" className={style.link}>{name}</a>
    )
}

export default MenuItem;