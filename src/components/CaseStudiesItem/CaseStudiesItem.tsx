import { useMatch } from "react-router-dom";
import { caseCards } from "../../data";
import Hero from "./Hero/Hero";
import GetFreeSeo from "../GetFreeSeo/GetFreeSeo";
import Feedback from "../Feedback/Feedback";
import ClientsCase from "../ClientsCase/ClientsCase";
import style from "./casestydiesitem.module.scss";
import DigitsPart from "./DigitsPart";
import RichText from "./Richtext";
import GalleryPart from "./GalleryPart";
import ListData from "./ListData";

const CaseStudiesItem = () => {
  const match = useMatch("/casestudies/:id");
  const caseId = match?.params.id;

  if (!caseId) {
    return null;
  }

  const numericId = parseInt(caseId, 10);

  const caseItem = caseCards.find((card) => Number(card.id) === numericId);

  if (!caseItem) {
    return null;
  }

  return (
    <>
      <Hero
        imgmain={caseItem.imgmain}
        imgLogo={caseItem.imglogo}
        altLogo={caseItem.altlogo}
        title={caseItem.title}
      />
      <div className="container">
        <DigitsPart
          img1={caseItem.circle1}
          img2={caseItem.circle2}
          digit1={caseItem.digit1}
          digit2={caseItem.digit2}
          description1={caseItem.description1}
          description2={caseItem.description2}
        />
        <div className={style.dinamicBlocks}>
          {caseItem.blocks?.map((item) => {
            if (item.type === "rich_text" || item.type === "simple_text") {
              return (
                <RichText key={item.id} text={item.text} type={item.type} />
              );
            }

            if (item.type === "gallery") {
              return (
                <GalleryPart
                  key={item.id}
                  type={item.type}
                  img={item.img}
                  altImg={item.altImg}
                />
              );
            }

            if (item.type === "list") {
              return (
                <ListData
                  key={item.id}
                  type={item.type}
                  title={item.title}
                  listItems={item.listItems}
                />
              );
            }

            // Возвращаем null для неизвестных типов, чтобы ничего не рендерить
            return null;
          })}
        </div>
      </div>
      <GetFreeSeo />
      <div className={style.greyZone}>
        <div className="container">
          <Feedback />
        </div>
        <ClientsCase />
      </div>
    </>
  );
};

export default CaseStudiesItem;
