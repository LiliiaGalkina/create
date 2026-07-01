import { serviceInfo } from "../../data";
import ServiceItemInfo from "./ServiceItemInfo/ServiceItemInfo";

const ServiceItemForth = () => {
    return (
      <div>
        <ServiceItemInfo {...serviceInfo[2]} />
      </div>
    );
}
 
export default ServiceItemForth;