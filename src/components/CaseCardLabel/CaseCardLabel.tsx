import type React from "react";
import style from "./casecardlabel.module.scss";
import type { IPropsCaseCardLabel } from "../../types";

const CaseCardLabel:React.FC<IPropsCaseCardLabel> = ({imglogo, altlogo, title}) => {
    return (
      <div className={style.label}>
        <img src={imglogo} alt={altlogo} className={style.logo} />
        <h3 className={style.title}>{title}</h3>
      </div>
    );
}
 
export default CaseCardLabel;