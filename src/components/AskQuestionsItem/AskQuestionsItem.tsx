import style from "./askquestionsitem.module.scss";
import plus from "../../../public/image/home/plus.svg";
import minus from "../../../public/image/home/minus.svg";
import React, { useState } from "react";
import type { askQuestionsProps } from "../../types";

const AskQuestionsItem: React.FC<askQuestionsProps> = ({ title, text }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={style.item}>
      <button className={style.button} onClick={() => setIsActive(!isActive)}>
        <img src={isActive ? minus : plus} alt={isActive ? "minus" : "plus"} />
      </button>
      <div className={style.block}>
        <h3 className={style.title}>{title}</h3>
        <p
          className={style.text}
          style={{ display: isActive ? "block" : "none" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default AskQuestionsItem;
