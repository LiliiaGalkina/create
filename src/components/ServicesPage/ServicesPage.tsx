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
      <div className={style.blocks}>
        <ServicesBlockWrapper>
          {
            <div>
              <div className={style.items}>
                <ServiceBlockInfo {...servicesBlockInfo[0]} />
                <ServiceBlockImage
                  mainImage="./image/services/marketing-mainimg.png"
                  fonImage="./image/services/marketing-fon.png"
                  classDop="marketing"
                />
              </div>
            </div>
          }
        </ServicesBlockWrapper>
        <ServicesBlockWrapper>
          {
            <div>
              <div className={style.items}>
                <ServiceBlockImage
                  mainImage="./image/services/optimization-mainimg.png"
                  fonImage="./image/services/optimization-fon.png"
                  classDop="optimization"
                />
                <ServiceBlockInfo {...servicesBlockInfo[1]} />
              </div>
            </div>
          }
        </ServicesBlockWrapper>
        <ServicesBlockWrapper>
          {
            <div>
              <div className={style.items}>
                <ServiceBlockInfo {...servicesBlockInfo[2]} />
                <ServiceBlockImage
                  mainImage="./image/services/research-mainimg.png"
                  fonImage="./image/services/research-fon.png"
                  classDop="research"
                />
              </div>
            </div>
          }
        </ServicesBlockWrapper>
        <ServicesBlockWrapper>
          {
            <div>
              <div className={style.items}>
                <ServiceBlockImage
                  mainImage="./image/services/content-mainimg.png"
                  fonImage="./image/services/content-fon.png"
                  classDop="content"
                />
                <ServiceBlockInfo {...servicesBlockInfo[3]} />
              </div>
            </div>
          }
        </ServicesBlockWrapper>
      </div>
      <GetFreeSeo />
      <Markets />
      <ClientsCase />
      <div className="container">
        <Clients/>
        <HomeNews />
      </div>
    </main>
  );
};

export default ServicesPage;
