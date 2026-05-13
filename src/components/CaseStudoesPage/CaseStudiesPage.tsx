import CaseCards from "../CaseCards/CaseCards";
import CaseCardsFilter from "../CaseCardsFilter/CaseCardsFilter";
import CaseStudiesHero from "../CaseStudiesHero/CaseStudiesHero";
import { caseCards } from "../../data";

const CaseStudiesPage = () => {
    return ( 
        <main>
            <CaseStudiesHero/>
            <div className="container">
                <CaseCardsFilter/>
                <CaseCards cards={caseCards}/>
            </div>
        </main>
     );
}
 
export default CaseStudiesPage;