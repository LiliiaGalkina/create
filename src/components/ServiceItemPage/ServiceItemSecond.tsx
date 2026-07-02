import { serviceInfo } from "../../data";
import ServiceItemInfo from "./ServiceItemInfo/ServiceItemInfo";

const ServiceItemSecond = () => {
    return (
      <div>
        <ServiceItemInfo {...serviceInfo[1]} />
      </div>
    );
}
 
export default ServiceItemSecond;