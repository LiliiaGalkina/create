import type React from "react";
import style from "./serviceblockimage.module.scss";
import type { servicesBlockImageProps } from "../../types";

const ServiceBlockImage: React.FC<servicesBlockImageProps> = ({mainImage, classDop}) => {
    return (
      <div className={`${style.imgBlock} ${style[classDop]}`}>
        <img src={mainImage} alt="graphics" className={style.mainImg} />
      </div>
    );
}
 
export default ServiceBlockImage;