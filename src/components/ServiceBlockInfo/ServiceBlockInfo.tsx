import type React from "react";
import style from "./serviceblockinfo.module.scss";
import type { IPropsServicesBlockInfo } from "../../types";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const ServiceBlockInfo:React.FC<IPropsServicesBlockInfo> = ({id, title, text}) => {
    return (
      <div className={style.info}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{text}</p>
        <div className={style.buttons}>
          <Link to={`/service/${id}`}>
            <Button textButton="Learn more" classDop="serviceBlockBtnWhite" />
          </Link>
          <Button textButton="Try SEO toolkit" classDop="serviceBlockBtn"/>
        </div>
      </div>
    );
}
 
export default ServiceBlockInfo;