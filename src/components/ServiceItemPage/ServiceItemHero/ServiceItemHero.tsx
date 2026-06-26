import CrumbsItem from "../../CrumbsItem/CrumbsItem";
import HeroPagesDecors from "../../HeroPagesDecors/HeroPagesDecors";
import HeroText from "../../HeroText/HeroText";
import HeroTitle from "../../HeroTitle/HeroTitle";
import HeroTitleblock from "../../HeroTitleBlock/HeroTitleblock";
import style from "./serviceitemhero.module.scss";

const ServiceItemHero = () => {
    return (
      <section className={style.hero}>
        <HeroPagesDecors
          shapesClass="aboutDecorShapesUp"
          linesLeftClass="aboutDecorLittleLinesLeft"
          linesUpClass="aboutDecorLinesUp"
          manyShapesClass="aboutDecorManyShapesDown"
          linesrightClass="aboutDecorLittleLinesRight"
        />
        <div className="container">
          <HeroTitleblock>
            <CrumbsItem parent="Services" name="Search Engine Optimization" />
            <HeroTitle title="Search Engine Optimization" />
            <HeroText text="Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui pellentesque enim integer facilisi. Ultrices vitae tempor amet nec euismod non." />
          </HeroTitleblock>
        </div>
      </section>
    );
}
 
export default ServiceItemHero;