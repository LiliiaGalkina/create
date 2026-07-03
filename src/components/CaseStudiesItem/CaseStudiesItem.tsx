import { useMatch } from "react-router-dom";
import { caseCards } from "../../data";
import Hero from "./Hero/Hero";

const CaseStudiesItem = () => {
  const match = useMatch("/casestudies/:id");

  const caseId = match?.params.id;

  if (!caseId) {
    return null;
  }

  const numericId = parseInt(caseId, 10);

 const caseItem = caseCards.find((card) => Number(card.id) === numericId);
console.log(caseItem);

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
    </>
  );
};

export default CaseStudiesItem;
