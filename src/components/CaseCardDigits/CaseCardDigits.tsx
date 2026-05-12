import type React from "react";
import style from "./casecarddigits.module.scss";
import type { IPropsCaseCardInfo } from "../../types";

const CaseCardDigits: React.FC<IPropsCaseCardInfo> = ({
  circle1,
  digit1,
  description1,
  circle2,
  digit2,
  description2,
}) => {
  return (
    <>
      <div className={style.item}>
        {circle1 && <img src={circle1} alt="circle" className={style.circle} />}
        <p className={style.info}>
          <span className={style.digit}>{digit1}</span>
          <span className={style.desc}>{description1}</span>
        </p>
      </div>
      <div className={style.item}>
        {circle2 && <img src={circle2} alt="circle" className={style.circle} />}
        <p className={style.info}>
          <span className={style.digit}>{digit2}</span>
          <span className={style.desc}>{description2}</span>
        </p>
      </div>
    </>
  );
};

export default CaseCardDigits;
