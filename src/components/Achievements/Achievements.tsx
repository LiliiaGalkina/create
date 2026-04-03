import style from "./achievements.module.scss";
import { achievements } from "../../data";

const Achievements = () => {
    return (
      <div className={style.achievements}>
        {achievements.map((achievement) => (
          <div key={achievement.id} className={style.achievement}>
            <div className={style.image}>
              <img src={achievement.image} alt={achievement.alt} />
            </div>
            <p className={style.text}>{achievement.text}</p>
          </div>
        ))}
      </div>
    );
}
 
export default Achievements;