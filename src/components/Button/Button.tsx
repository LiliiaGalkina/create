import type React from "react";
import style from "./button.module.scss";
import type { buttonProps } from "../../types";


const Button: React.FC<buttonProps> = ({textButton, classDop}) => {
    return (
        <button  className={`${style.button} ${classDop ? style[classDop] : ''}`} >{textButton}</button>
    )
}

export default Button;