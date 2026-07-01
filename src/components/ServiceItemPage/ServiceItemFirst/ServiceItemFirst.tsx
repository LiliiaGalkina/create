import { serviceInfo } from "../../../data";
import ServiceItemInfo from "../ServiceItemInfo/ServiceItemInfo";
import ServiceItemSeo from "../ServiceItemSeo/ServiceItemSeo";

const ServiceItemFirst = () => {
  return (
    <div>
      <ServiceItemInfo {...serviceInfo[0]}/>
      <ServiceItemSeo/>
    </div>
  );
}


export default ServiceItemFirst;
