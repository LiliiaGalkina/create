import ServicesHero from "../ServicesHero/ServicesHero";
import ServicesBlockWrapper from "../ServicesBlockWrapper/ServicesBlockWrapper";
import ServiceBlockInfo from "../ServiceBlockInfo/ServiceBlockInfo";
import style from "./servicespage.module.scss";
import { servicesBlockInfo } from "../../data";
import ServiceBlockImage from "../ServiceBlockImage/ServiceBlockImage";
import GetFreeSeo from "../GetFreeSeo/GetFreeSeo";
import Markets from "../Markets/Markets";
import ClientsCase from "../ClientsCase/ClientsCase";
import HomeNews from "../HomeNews/HomeNews";
import Clients from "../Clients/Clients";

const ServicesPage = () => {
  return (
    <main>
      <ServicesHero />
      <div className="container">
        <div className={style.blocks}>
          <ServicesBlockWrapper>
            {
              <div className={style.items}>
                <ServiceBlockInfo {...servicesBlockInfo[0]} />
                <ServiceBlockImage
                  mainImage="./image/services/marketing-mainimg.png"
                  classDop="marketing"
                />
              </div>
            }
          </ServicesBlockWrapper>
          <ServicesBlockWrapper>
            {
              <div className={style.itemsrevers}>
                <ServiceBlockImage
                  mainImage="./image/services/optimization-mainimg.png"
                  classDop="optimization"
                />
                <ServiceBlockInfo {...servicesBlockInfo[1]} />
              </div>
            }
          </ServicesBlockWrapper>
          <ServicesBlockWrapper>
            {
              <div className={style.items}>
                <ServiceBlockInfo {...servicesBlockInfo[2]} />
                <ServiceBlockImage
                  mainImage="./image/services/research-mainimg.png"
                  classDop="research"
                />
              </div>
            }
          </ServicesBlockWrapper>
          <ServicesBlockWrapper>
            {
              <div className={style.itemsrevers}>
                <ServiceBlockImage
                  mainImage="./image/services/content-mainimg.png"
                  classDop="content"
                />
                <ServiceBlockInfo {...servicesBlockInfo[3]} />
              </div>
            }
          </ServicesBlockWrapper>
        </div>
      </div>
      <GetFreeSeo />
      <Markets />
      <ClientsCase />
      <div className="container">
        <Clients />
        <HomeNews />
      </div>
    </main>
  );
};

export default ServicesPage;
