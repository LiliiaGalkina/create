import style from "./achievements.module.scss";
import { achievements } from "../../data";

const Achievements = () => {
  return (
    <div className={style.achievements}>
      <div className="container">
        <div className={style.items}>
          {achievements.map((achievement) => (
            <div key={achievement.id} className={style.achievement}>
              <div className={style.image}>
                <img src={achievement.image} alt={achievement.alt} />
              </div>
              <p className={style.text}>{achievement.text}</p>
            </div>
          ))}
        </div>
      </div>
      <img
        src="./image/home/circle-progress-left.png"
        alt="clips"
        className={style.decorLeft}
      />
      <img
        src="./image/home/circle-progress-right.png"
        alt="two green curves" className={style.decorRight}
      />
    </div>
  );
};

export default Achievements;
