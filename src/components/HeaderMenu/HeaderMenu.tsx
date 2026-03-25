import style from "./headermenu.module.scss";
import { menuItems } from "../../data";
import MenuItem from "../MenuItem/MenuItem";
import { useState } from "react";

const HeaderMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={style.menu}>
      <div
        className={isMenuOpen ? style.burgeractive : style.burger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
      </div>
      <ul
        className={isMenuOpen ? style.listactive : style.list}
        onClick={() => setIsMenuOpen(false)}
      >
        {menuItems.map((item) => (
          <li className={style.menuItem} key={item.id}>
            <MenuItem {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
