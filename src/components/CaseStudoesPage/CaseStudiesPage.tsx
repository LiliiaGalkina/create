import CaseCards from "../CaseCards/CaseCards";
import CaseCardsFilter from "../CaseCardsFilter/CaseCardsFilter";
import CaseStudiesHero from "../CaseStudiesHero/CaseStudiesHero";
import { caseCards } from "../../data";
import { useState } from "react";
import { caseCardsFilter } from "../../data";

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
    </main>
  );
};

export default CaseStudiesPage;
