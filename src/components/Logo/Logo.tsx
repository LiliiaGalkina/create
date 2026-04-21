import { Link } from "react-router-dom";
import style from "./logo.module.scss";
 
const Logo = () => {
    return (
        <Link to={"/"} className={style.logo}>
            <img src="./image/logo.svg" alt="logo icon" />
        </Link>
    )
}

export default Logo;