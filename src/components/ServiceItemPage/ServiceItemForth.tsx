import { serviceInfo } from "../../data";
import ServiceItemInfo from "./ServiceItemInfo/ServiceItemInfo";

const ServiceItemForth = () => {
    return (
      <div>
        <ServiceItemInfo {...serviceInfo[3]} />
      </div>
    );
}
 
export default ServiceItemForth;