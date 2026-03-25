import style from "./header.module.scss";
import Logo from "../Logo/Logo";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.items}>
          <div className={style.navigation}>
            <Logo />
            <HeaderMenu />
          </div>
          <Button textButton="Talk to a human" width="19.9rem"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
