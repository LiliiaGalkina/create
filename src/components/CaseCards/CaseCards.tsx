import style from "./casecards.module.scss";
import CaseCard from "../CaseCard/CaseCard";
import type React from "react";
import type { TPropsCards } from "../../types";


const CaseCards: React.FC<TPropsCards> = ({ cards, count, onLoadMore }) => {
  const cardsItems = cards.slice(0, count);
  const shouldShowButton = cards.length > cardsItems.length;

  return (
    <>
      <div className={style.cards}>
        {cardsItems.map((item) => (
          <CaseCard key={item.id} {...item} />
        ))}
      </div>
      {shouldShowButton && (
        <button className={style.btn} onClick={onLoadMore}>
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
