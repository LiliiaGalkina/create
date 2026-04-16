import style from "./feedback.module.scss";
import FeedbackSlider from "../FeedbackSlider/FeedbackSlider";

const Feedback = () => {
    return (
      <section className={style.feedback}>
        <h2 className={style.title}>What our clients say</h2>
        <FeedbackSlider/>
      </section>
    );
}
 
export default Feedback;