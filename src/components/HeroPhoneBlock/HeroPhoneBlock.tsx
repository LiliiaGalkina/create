import type React from "react";
import style from "./herophoneblock.module.scss";
import type { IPropsPhoneBlock } from "../../types";

const HeroPhoneBlock:React.FC<IPropsPhoneBlock> = ({img, alt, text1, text2}) => {
    return (
      <div className={style.phoneBlock}>
        <div className={style.phoneimg}>
          <img src={img} alt={alt} />
        </div>
        <div className={style.info}>
          <span className={style.text}>{text1}</span>
          <span className={style.phone}>{text2}</span>
        </div>
      </div>
    );
}
 
export default HeroPhoneBlock;