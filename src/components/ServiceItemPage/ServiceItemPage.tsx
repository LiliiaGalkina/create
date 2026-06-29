import { useMatch } from "react-router-dom";
import { servicesBlockInfo } from "../../data";
import ServiceItemWrapper from "./ServiceItemWrapper";

const ServiceItemPage = () => {
    const match = useMatch("/service/:id");
    const serviceId: any = match?.params.id;
    const serviceItem:any = servicesBlockInfo.find((item) => item.id == serviceId);

    return ( 
        <main>
          <ServiceItemWrapper serviceItem={serviceItem}>
            <div></div>
          </ServiceItemWrapper>
        </main>
     );
}
 
export default ServiceItemPage;