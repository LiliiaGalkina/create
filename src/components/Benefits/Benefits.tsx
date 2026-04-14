import style from "./benefits.module.scss";
import { benefits } from "../../data";
import BenefitsItem from "../BenefitsItems/BenefitsItem";

const Benefits = () => {
    return (
      <section className={style.benefits}>
        <h2 className={style.title}>Our benefits</h2>
        <div className={style.items}>
            {benefits.map((item) => (
              <BenefitsItem key={item.id} {...item} />
            ))}
          <div className={style.mainImg}>
            <img src="./image/home/benefits-main.png" alt="girl in green" />
          </div>
       
        </div>
      </section>
    );
}
 
export default Benefits;