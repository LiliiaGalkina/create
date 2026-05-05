import type React from "react";
import style from "./button.module.scss";
import type {IPropsButton} from "../../types";


const Button: React.FC<IPropsButton> = ({textButton, classDop}) => {
    return (
        <button  className={`${style.button} ${classDop ? style[classDop] : ''}`} >{textButton}</button>
    )
}

export default Button;