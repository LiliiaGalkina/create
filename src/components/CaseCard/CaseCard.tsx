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
            <svg
              className={style.arrowRight}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
