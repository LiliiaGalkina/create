import type React from "react";
import style from "./careersakkordeonitem.module.scss";
import type { IPropsCareerItem } from "../../types";
import { useState } from "react";

const CareersAkkordeonItem: React.FC<IPropsCareerItem> = ({
  title,
  blockText,
  regListItems,
  respListItems,
}) => {
  const [isActive, setIsActive] = useState(false);

  const minus = "./image/home/minus.svg";
  const plus = "./image/home/plus.svg";

  return (
    <div className={style.item}>
      <button className={style.button} onClick={() => setIsActive(!isActive)}>
        <img src={isActive ? minus : plus} alt={isActive ? "minus" : "plus"} />
      </button>
      <div className={style.block}>
        <h3 className={style.title}>{title}</h3>
        <div
          className={style.content}
          style={{ display: isActive ? "block" : "none" }}
        >
          <p className={style.text}>{blockText}</p>
          <h4 className={style.listtitle}>Requirements:</h4>
          <ul className={style.list}>
            {regListItems.map((listitem, index) => (
              <li key={index} className={style.listitem}>{listitem}</li>
            ))}
          </ul>
          <h4 className={style.listtitle}>Responsibilities:</h4>
          <ul className={style.list}>
            {respListItems.map((listitem, index) => (
              <li key={index} className={style.listitem}>{listitem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareersAkkordeonItem;
