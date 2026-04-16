import type React from "react";
import style from "./feedbackslideritem.module.scss";
import type { feedbackSliderProps } from "../../types";

const FeedBackSliderItem:React.FC<feedbackSliderProps> = ({text, image, alt, name, position}) => {
    return ( 
        <div className={style.item}>
            <img src="./image/home/slider-braces.svg" alt="blue braces" className={style.braces}/>
            <p className={style.text}>{text}</p>
            <div className={style.autor}>
                <img src={image} alt={alt} className={style.foto}/>
                <div className={style.info}>
                    <span className={style.name}>{name}</span>
                    <span className={style.position}>{position}</span>
                </div>
            </div>
        </div>
     );
}
 
export default FeedBackSliderItem;