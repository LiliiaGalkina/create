import type React from "react";
import style from "./serviceblockimage.module.scss";
import type { servicesBlockImageProps } from "../../types";

const ServiceBlockImage: React.FC<servicesBlockImageProps> = ({mainImage, fonImage, classDop}) => {
    return (
      <div className={style.imgBlock}>
        <img src={mainImage} alt="graphics" className={style.mainImg} />
        <img
          src={fonImage}
          alt="grey abstractive"
          className={`${style.fon} ${style[classDop]}`}
        />
      </div>
    );
}
 
export default ServiceBlockImage;