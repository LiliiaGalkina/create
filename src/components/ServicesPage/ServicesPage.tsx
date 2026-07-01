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
          {servicesBlockInfo.map((item) => (
            <ServicesBlockWrapper>
              <div
                className={item.id % 2 != 0 ? style.items : style.itemsrevers}
              >
                <ServiceBlockInfo {...item} />
                <ServiceBlockImage
                  mainImage={item.image}
                  classDop={item.classDop}
                />
              </div>
            </ServicesBlockWrapper>
          ))}
        </div>
      </div>
      <GetFreeSeo />
      <Markets />
      <ClientsCase />
      <div className="container">
        <Clients clientsCount={6} />
        <HomeNews />
      </div>
      *
    </main>
  );
};

export default ServicesPage;
