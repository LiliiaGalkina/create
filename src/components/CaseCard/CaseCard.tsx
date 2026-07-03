import type React from "react";
import style from "./casecard.module.scss";
import type { IPropsCaseCards } from "../../types";
import CaseCardDigits from "../CaseCardDigits/CaseCardDigits";
import CaseCardLabel from "../CaseCardLabel/CaseCardLabel";
import { Link } from "react-router-dom";

const CaseCard: React.FC<IPropsCaseCards> = ({
  id,
  imgmain,
  altmain,
  imglogo,
  altlogo,
  title,
  circle1,
  circle2,
  digit1,
  digit2,
  description1,
  description2,
  text,
}) => {
  return (
    <div className={style.card}>
      <img
        src={imgmain}
        alt={altmain}
        className={style.image}
        style={{ filter: id === 2 ? "brightness(50%)" : "brightness(100%)" }}
      />
      <CaseCardLabel imglogo={imglogo} altlogo={altlogo} title={title} />
      <div className={style.cardbody}>
        <div className={style.up}>
          <CaseCardDigits
            circle1={circle1}
            digit1={digit1}
            description1={description1}
            circle2={circle2}
            digit2={digit2}
            description2={description2}
          />
        </div>
        <div className={style.down}>
          <p className={style.text}>{text}</p>
          <Link to={`/casestudies/${id}`} className={style.link}>
            <span>View case</span>
            <img src="./image/casestudies/arrow-right.svg" alt="arrow right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
