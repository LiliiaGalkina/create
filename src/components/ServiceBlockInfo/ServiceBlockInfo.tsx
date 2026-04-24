import type React from "react";
import style from "./serviceblockinfo.module.scss";
import type { servicesBlockInfoProps } from "../../types";

const ServiceBlockInfo:React.FC<servicesBlockInfoProps> = ({title, text}) => {
    return ( 
        <div className={style.info}>
            <h3 className={style.title}>{title}</h3>
            <p className={style.text}>{text}</p>
        </div>
     );
}
 
export default ServiceBlockInfo;