import type React from "react";
import style from "./button.module.scss";
import type { buttonProps } from "../../types";


const Button: React.FC<buttonProps> = ({textButton, width}) => {
    return (
        <button className={style.button} style={{width: width}}>{textButton}</button>
    )
}

export default Button;