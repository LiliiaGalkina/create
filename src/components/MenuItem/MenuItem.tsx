import type React from "react";
import style from "./menuitem.module.scss";
import type { menuProps } from "../../types";
import { Link } from "react-router-dom";

const MenuItem: React.FC<menuProps> = ({name, link}) => {
    return (
        <Link to={link} className={style.link}>{name}</Link>
    )
}

export default MenuItem;