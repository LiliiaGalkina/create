import style from "./benefits.module.scss";
import { benefits } from "../../data";
import BenefitsItem from "../BenefitsItems/BenefitsItem";

const Benefits = () => {
  return (
    <section className={style.benefits}>
      <div className="container">
        <h2 className={style.title}>Our benefits</h2>
        <div className={style.items}>
          {benefits.map((item) => (
            <BenefitsItem key={item.id} {...item} />
          ))}
          <div className={style.mainImg}>
            <img src="./image/home/benefits-main.png" alt="girl in green" />
          </div>
        </div>
        <img
          src="./image/home/benefits-decor-left.png"
          alt="green lines"
          className={style.decorLeft}
        />
        <img
          src="./image/home/benefits-decor-right.png"
          alt="green lines"
          className={style.decorRight}
        />
      </div>
    </section>
  );
};

export default Benefits;
