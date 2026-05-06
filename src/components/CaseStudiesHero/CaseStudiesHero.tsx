import style from "./casestudieshero.module.scss";
import HeroPagesDecors from "../HeroPagesDecors/HeroPagesDecors";
import HeroTitleblock from "../HeroTitleBlock/HeroTitleblock";
import Crumbs from "../Crumbs/Crumbs";
import HeroTitle from "../HeroTitle/HeroTitle";
import HeroText from "../HeroText/HeroText";

const CaseStudiesHero = () => {
    return (
      <div className={style.hero}>
        <div className="container">
          <HeroPagesDecors      
        shapesClass="caseDecorShapesUp"
        linesLeftClass="servicesDecorLittleLinesLeft"
        linesUpClass="caseDecorLinesUp"
        manyShapesClass="servicesDecorManyShapesDown"
        linesrightClass="caseDecorLittleLinesRight"
      />
          <HeroTitleblock>
            <Crumbs name="Case Studies" />
            <HeroTitle title="Case Studies" />
            <HeroText text="We help our clients get better results with our creative and data-driven approach to online advertising. View our case study portfolio and learn more about the process that sets us apart." />
          </HeroTitleblock>
        </div>
      </div>
    );
}
 
export default CaseStudiesHero;