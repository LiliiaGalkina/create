import AskQuestionsItems from "../AskQuestionsItems/AskQuestionsItems";
import style from "./askquestions.module.scss";

const AskQuestions = () => {
    return (
      <section className={style.askquestions}>
        <div className="container">
          <div className={style.items}>
            <div className={style.info}>
              <h2 className={style.title}>Freequently Ask Questions</h2>
              <AskQuestionsItems/>
            </div>
            <div className={style.imgItem}>
              <img
                src="./image/home/questions.png"
                alt="a man in a green shirt is sitting at a table with a large question mark above him"
                className={style.img}
              />
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default AskQuestions;
