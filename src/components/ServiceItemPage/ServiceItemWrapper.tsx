import type { TPropsServiceItem } from "../../types";
import Clients from "../Clients/Clients";
import ServiceItemHero from "./ServiceItemHero/ServiceItemHero";

const ServiceItemWrapper: React.FC<TPropsServiceItem> = ({ serviceItem, children }) => {
  return (
    <div>
      {serviceItem && (
        <ServiceItemHero title={serviceItem?.title} text={serviceItem.text} />
      )}
      <div className="container">
        <Clients clientsCount={6} />
        {children}
      </div>
    </div>
  );
};

export default ServiceItemWrapper;
