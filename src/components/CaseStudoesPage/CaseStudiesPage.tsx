import CaseCards from "../CaseCards/CaseCards";
import CaseCardsFilter from "../CaseCardsFilter/CaseCardsFilter";
import CaseStudiesHero from "../CaseStudiesHero/CaseStudiesHero";

const CaseStudiesPage = () => {
    return ( 
        <main>
            <CaseStudiesHero/>
            <div className="container">
                <CaseCardsFilter/>
                <CaseCards/>
            </div>
        </main>
     );
}
 
export default CaseStudiesPage;