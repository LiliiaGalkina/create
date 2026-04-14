import style from "./pricingplansitems.module.scss";
import { pricingPlans } from "../../data";
import PricingPlansItem from "../PricingPlansItem/PricingPlanItem";

const PricingPlansItems = () => {
    return ( 
        <div className={style.items}>
            {
                pricingPlans.map((item) => (
                    <PricingPlansItem key={item.id} {...item}/>
                ))
            }
        </div>
     );
}
 
export default PricingPlansItems;
