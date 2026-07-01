import { serviceInfo } from "../../../data";
import ServiceItemInfo from "../ServiceItemInfo/ServiceItemInfo";

const ServiceItemThird = () => {
    return (
      <div>
        <ServiceItemInfo {...serviceInfo[2]} />
      </div>
    );
}
 
export default ServiceItemThird;