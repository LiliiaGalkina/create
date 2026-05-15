import CaseCards from "../CaseCards/CaseCards";
import CaseCardsFilter from "../CaseCardsFilter/CaseCardsFilter";
import CaseStudiesHero from "../CaseStudiesHero/CaseStudiesHero";
import { caseCards } from "../../data";
import { useState } from "react";
import { caseCardsFilter } from "../../data";
import Clients from "../Clients/Clients";
import style from "./casestudiespage.module.scss";
import Feedback from "../Feedback/Feedback";
import HomeNews from "../HomeNews/HomeNews";

const CaseStudiesPage = () => {
  const initialCategoryId = caseCardsFilter[0].id;

  const [selectedCategoryId, setSelectedCategoryId] =
    useState<number>(initialCategoryId);

  const [visibleCount, setVisibleCount] = useState<number>(6);

  const filteredCards =
    selectedCategoryId === 1
      ? caseCards
      : caseCards.filter((card) => card.category === selectedCategoryId);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  return (
    <main>
      <CaseStudiesHero />
      <div className="container">
        <CaseCardsFilter
          category={selectedCategoryId}
          setCategory={(id) => {
            setSelectedCategoryId(id);
            setVisibleCount(6);
          }}
        />
        <CaseCards
          cards={filteredCards}
          count={visibleCount}
          onLoadMore={handleLoadMore}
        />
      </div>
      <div className={style.greyZone}>
        <div className="container">
          <Clients />
          <Feedback/>
          <HomeNews/>
        </div>
      </div>
    </main>
  );
};

export default CaseStudiesPage;
