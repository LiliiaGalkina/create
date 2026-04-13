import style from "./benefits.module.scss";
import { benefits } from "../../data";
import BenefitItem from "../BenefitsItems/BenefitsItem";

const Benefits = () => {
    return (
      <section className={style.benefits}>
        <h2 className={style.title}>Our benefits</h2>
        <div className={style.items}>
          <div className={style.benefitsItems}>
            {benefits.slice(0, 3).map((item) => (
              <BenefitItem key={item.id} {...item} />
            ))}
          </div>
          <div className={style.mainImg}>
            <img src="./image/home/benefits-main.png" alt="girl in green" />
          </div>
          <div className={style.benefitsItems}>
            {benefits.slice(3).map((item) => (
              <BenefitItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    );
}
 
export default Benefits;