import style from "./herotitleblock.module.scss";

type TPropsElement = { children: React.ReactNode };

const HeroTitleblock = ({children}:TPropsElement) => {
    return ( <div className={style.titleBlock}>{children}</div> );
}
 
export default HeroTitleblock;