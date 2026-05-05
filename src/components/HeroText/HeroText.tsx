import type React from "react";
import style from "./herotext.module.scss";

type TPropsText = {
    text: string
}

const HeroText:React.FC<TPropsText> = ({text}) => {
    return (
      <p className={style.text}>
        {text}
      </p>
    );
}
 
export default HeroText;