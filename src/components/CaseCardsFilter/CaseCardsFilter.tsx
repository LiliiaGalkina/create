import style from "./casecardsfilter.module.scss";
import { caseCardsFilter } from "../../data";

const CaseCardsFilter = () => {
    return (
      <ul className={style.filter}>
        {caseCardsFilter.map((item) => (
            <li className={style.item} key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
}
 
export default CaseCardsFilter;