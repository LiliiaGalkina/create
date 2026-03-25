import style from "./logo.module.scss";
 
const Logo = () => {
    return (
        <a href="#" className={style.logo}>
            <img src="./image/logo.svg" alt="logo icon" />
        </a>
    )
}

export default Logo;