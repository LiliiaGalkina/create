import { useMatch } from "react-router-dom";
import { servicesBlockInfo } from "../../data";
import ServiceItemWrapper from "./ServiceItemWrapper";
import ServiceItemFirst from "./ServiceItemFirst";
import ServiceItemSecond from "./ServiceItemSecond";
import AboutFreeAnalysisForm from "../AboutFreeAnalysisForm/AboutFreeAnalisysForm";
import PricingPlans from "../PricingPlans/PrisingPlans";
import ClientsCase from "../ClientsCase/ClientsCase";
import HowItWorks from "./HowItWorks/HowItWorks";
import ServiceItemThird from "./ServiceItemThird/ServiceItemThird";
import ServiceItemForth from "./ServiceItemForth";
import ServiceItemFifth from "./ServiceItemFifth";

const ServiceItemPage = () => {
  const match = useMatch("/service/:id");
  const serviceId: any = match?.params.id;
  const numericId = serviceId ? parseInt(serviceId, 10) : NaN;
  const serviceItem = servicesBlockInfo.find((item) => item.id == numericId);

const SERVICE_COMPONENTS: { [key: number]: React.ComponentType } = {
  1: ServiceItemFirst,
  2: ServiceItemSecond,
  3: ServiceItemThird,
  4: ServiceItemForth,
  5: ServiceItemFifth,
};
const SelectedComponent = SERVICE_COMPONENTS[numericId];

if (!SelectedComponent) {
  throw new Error("Service not found");
}

  return (
    <main>
      <ServiceItemWrapper serviceItem={serviceItem}>
        <SelectedComponent />
      </ServiceItemWrapper>
      <div className="container">
        <AboutFreeAnalysisForm />
        <HowItWorks />
        <PricingPlans />
      </div>
      <ClientsCase />
    </main>
  );
};

export default ServiceItemPage;
