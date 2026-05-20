import Awards from "../Awards/Awards";
import style from "./aboutawards.module.scss";

const AboutAwards = () => {
    return (
      <section className={style.awards}>
        <div className={style.items}>
          <div className={style.itemimg}>
            <img src="./image/about/awards.png" alt="a girl with two plates" />
          </div>
          <div className={style.awardsBlock}>
            <h3 className={style.title}>We are proud of our awards</h3>
            <Awards />
          </div>
        </div>
      </section>
    );
}
 
export default AboutAwards;