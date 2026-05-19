import style from "./aboutcorevaluesitems.module.scss";
import { coreValuesItems } from "../../data";
import AboutCoreValueItem from "../AboutCoreValueItem/AboutCoreValueItem";

const AboutCoreValuesItems = () => {
    return ( 
        <div className={style.cardItems}>
            {
                coreValuesItems.map((item) => (
                    <AboutCoreValueItem key={item.id} {...item}/>
                ))
            }
        </div>
     );
}
 
export default AboutCoreValuesItems;