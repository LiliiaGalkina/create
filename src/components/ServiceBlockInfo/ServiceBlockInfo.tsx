import type React from "react";
import style from "./serviceblockinfo.module.scss";
import type { servicesBlockInfoProps } from "../../types";
import Button from "../Button/Button";

const ServiceBlockInfo:React.FC<servicesBlockInfoProps> = ({title, text}) => {
    return (
      <div className={style.info}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{text}</p>
        <div className={style.buttons}>
          <Button textButton="Learn more" classDop="serviceBlockBtnWhite"/>
          <Button textButton="Try SEO toolkit" classDop="serviceBlockBtn"/>
        </div>
      </div>
    );
}
 
export default ServiceBlockInfo;