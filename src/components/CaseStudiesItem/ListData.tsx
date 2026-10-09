import type React from "react";
import style from "./casestydiesitem.module.scss";
import type { IPropsListBlockData } from "../../types";

const ListData:React.FC<IPropsListBlockData> = ({title, listItems}) => {
    return ( 
        <div className={style.listBlock}>
            <h3 className={style.listTitle}>{title}</h3>
            <ul className={style.list}>
                {
                  listItems && listItems.map((item, index) => (<li key={index} className={style.listItem}>{item}</li>))
                }
            </ul>
        </div>
     );
}
 
export default ListData;