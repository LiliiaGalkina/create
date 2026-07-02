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


const ServiceItemPage = () => {
  const match = useMatch("/service/:id");
  const serviceId: any = match?.params.id;
  const numericId = serviceId ? parseInt(serviceId, 10) : NaN;
  const serviceItem = servicesBlockInfo.find((item) => item.id == numericId);

  return (
    <main>
      <ServiceItemWrapper serviceItem={serviceItem}>
        {serviceItem ? (
          serviceItem.id === 1 ? (
            <ServiceItemFirst />
          ) : serviceItem.id === 2 ? (
            <ServiceItemSecond />
          ) : serviceItem.id === 3 ? (
            <ServiceItemThird />
          ) : serviceItem.id === 4 ? (
            <ServiceItemForth />
          ) : (
            <p>Детальный просмотр для этого сервиса еще не разработан.</p>
          )
        ) : (
          <p>Сервис не найден. Проверьте правильность ID.</p>
        )}
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
