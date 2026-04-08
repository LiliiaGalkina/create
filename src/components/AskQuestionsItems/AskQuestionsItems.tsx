import { askQuestionsItems } from "../../data";
import style from "./askquestionsitems.module.scss";
import AskQuestionsItem from "../AskQuestionsItem/AskQuestionsItem";
import Button from "../Button/Button";

const AskQuestionsItems = () => {

    return (
      <>
        <div className={style.items}>
          {askQuestionsItems.map((item) => (
            <AskQuestionsItem key={item.id} {...item} />
          ))}
        </div>
        <Button
          textButton="Discover more &#8594;"
          classDop="askQuestionsButton"
        />
      </>
    );
}
 
export default AskQuestionsItems;