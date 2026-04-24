import ServicesHero from "../ServicesHero/ServicesHero";
import ServicesBlockWrapper from "../ServicesBlockWrapper/ServicesBlockWrapper";
import ServiceBlockInfo from "../ServiceBlockInfo/ServiceBlockInfo";
import ServicesBlockImageMarketing from "../ServicesBlockImageMarketing/ServicesBlockImageMarketing";
import ServicesBlockImageOptimisation from "../ServicesBlockImageOptimisation/ServicesBlockImageOptimisation";
import style from "./servicespage.module.scss";
import { servicesBlockInfo } from "../../data";

const ServicesPage = () => {
  return (
    <main>
      <ServicesHero />
      <ServicesBlockWrapper>
        {
          <div>
            <div className={style.items}>
              <ServiceBlockInfo {...servicesBlockInfo[0]} />
            </div>
            <div>
              <ServicesBlockImageMarketing />
            </div>
          </div>
        }
      </ServicesBlockWrapper>
      <ServicesBlockWrapper>
        {
          <div>
            <div>
              <ServicesBlockImageOptimisation />
            </div>
            <div className={style.items}>
              <ServiceBlockInfo {...servicesBlockInfo[1]} />
            </div>
          </div>
        }
      </ServicesBlockWrapper>
    </main>
  );
};

export default ServicesPage;
