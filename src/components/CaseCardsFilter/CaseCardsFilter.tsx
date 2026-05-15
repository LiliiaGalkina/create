import style from "./casecardsfilter.module.scss";
import { caseCardsFilter } from "../../data";
import type React from "react";
import type { TPropsCategory } from "../../types";

const CaseCardsFilter:React.FC<TPropsCategory> = ({category, setCategory}) => {

const handleCategoryClick = (selectedId: number) => {
  setCategory(selectedId);
};

    return (
      <ul className={style.filter}>
        {caseCardsFilter.map((item) => (
          <li
            key={item.id}
            className={`${style.item} ${category === item.id ? style.active : ""}`}
            onClick={() => handleCategoryClick(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    );
}
 
export default CaseCardsFilter;