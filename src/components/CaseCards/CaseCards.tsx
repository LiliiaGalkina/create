import style from "./casecards.module.scss";
import { caseCards } from "../../data";
import CaseCard from "../CaseCard/CaseCard";

const CaseCards = () => {
    return ( 
        <div className={style.cards}>
            {caseCards.slice(0, 6).map((item) => (
                <CaseCard key={item.id} {...item}/>
            ))}
        </div>
     );
}
 
export default CaseCards;