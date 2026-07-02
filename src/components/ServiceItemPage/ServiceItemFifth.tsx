import { serviceInfo } from "../../data";
import ServiceItemInfo from "./ServiceItemInfo/ServiceItemInfo";

const ServiceItemFifth = () => {
  return (
    <div>
      <ServiceItemInfo {...serviceInfo[4]} />
    </div>
  );
};

export default ServiceItemFifth;
