import style from "./ourservices.module.scss";
import OurServicesButtons from "../OurServicesButtons/OurServicesButtons";
import OurServicesInfo from "../OurServicesInfo/OurServicesInfo";
import OurServicesImages from "../OurServicesImages/OurServicesImages";
import { useState } from "react";
import { servicesBlockInfo } from "../../data";

const OurServices = () => {
  const [activeTabId, setActiveTabId] = useState<number>(
    servicesBlockInfo[0]?.id,
  );

  const currentService = servicesBlockInfo.find(
    (service) => service.id === activeTabId,
  );

  console.log(currentService);

  if (!currentService) return null;

  return (
    <section className={style.ourServices}>
      <div className="container">
        <h2 className={style.title}>Our services</h2>
        <OurServicesButtons
          items={servicesBlockInfo.map((s) => ({ id: s.id, label: s.title }))}
          activeId={activeTabId}
          onTabChange={(incomingId) => {
            const numericId = Number(incomingId);
            if (!isNaN(numericId)) {
              setActiveTabId(numericId);
            }
          }}
        />
        <div className={style.items}>
          <OurServicesInfo
            id={currentService.id}
            title={currentService.title}
            items={currentService.listItems || []}
          />
          <OurServicesImages mainImgSrc={currentService.image} />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
