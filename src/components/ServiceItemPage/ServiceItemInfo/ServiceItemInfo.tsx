import type React from "react";
import style from "./serviceiteminfo.module.scss";
import type { IPropsServiceInfo } from "../../../types";

const ServiceItemInfo: React.FC<IPropsServiceInfo> = ({img, imgalt, title, text}) => {
    return (
      <section className={style.info}>
        <div className={style.infoImg}>
          <img
            src={img}
            alt={imgalt}
          />
        </div>
        <div className={style.infoContent}>
          <h3 className={style.infoTitle}>
           {title}
          </h3>
          <p className={style.infoText}>
        {text}
          </p>
        </div>
      </section>
    );
}
 
export default ServiceItemInfo;