import style from "./pricingplans.module.scss";
import PricingPlansButtons from "../PricingPlansButtons/PricingPlansButtons";
import PricingPlansItems from "../PrisingPlansItems/PrisingPlansItems";

const PricingPlans = () => {
    return (
      <section className={style.pricingPlans}>
        <h2 className={style.title}>Flexible pricing plans</h2>
        <PricingPlansButtons/>
        <PricingPlansItems/>
      </section>
    );
}
 
export default PricingPlans;