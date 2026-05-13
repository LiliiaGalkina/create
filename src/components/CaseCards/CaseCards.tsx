import style from "./casecards.module.scss";
import CaseCard from "../CaseCard/CaseCard";
import type React from "react";
import type { TPropsCards } from "../../types";
import { useState } from "react";

const CaseCards: React.FC<TPropsCards> = ({ cards }) => {
  const [count, setCount] = useState(6);
  const cardsItems = cards.slice(0, count);

  const handleclick = () => {
    if (cards.length > cardsItems.length ) {
      setCount((prev) => prev + 2);
    }
  };
  
  return (
    <>
      <div className={style.cards}>
        {cardsItems.map((item) => (
          <CaseCard key={item.id} {...item} />
        ))}
      </div>
      {cards.length !== count && (
        <button className={style.btn} onClick={handleclick}>
          <img
            src="./image/casestudies/arrows-convert.svg"
            alt="arrows convert"
            className={style.btnImg}
          />
          <span className={style.btnText}>Load more</span>
        </button>
      )}
    </>
  );
};

export default CaseCards;
