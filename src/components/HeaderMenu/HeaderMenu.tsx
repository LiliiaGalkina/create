import style from "./headermenu.module.scss";
import { menuItems } from "../../data";
import MenuItem from "../MenuItem/MenuItem";

const HeaderMenu = () => {
    return (
        <nav className={style.menu}>
            <ul className={style.list}>
                {
                    menuItems.map((item) => (
                        <li className={style.menuItem}>
                            <MenuItem key={item.id} {...item}/>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default HeaderMenu;