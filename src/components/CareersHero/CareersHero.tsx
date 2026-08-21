import CareersHomePhoneBlock from "../CareersHeroPhoneBlock/CareersHeroPhoneBlock";
import CrumbsItem from "../CrumbsItem/CrumbsItem";
import HeroPagesDecors from "../HeroPagesDecors/HeroPagesDecors";
import HeroText from "../HeroText/HeroText";
import HeroTitle from "../HeroTitle/HeroTitle";
import HeroTitleblock from "../HeroTitleBlock/HeroTitleblock";
import style from "./careershero.module.scss";

const CareersHero = () => {
  return (
    <section className={style.hero}>
      <HeroPagesDecors
        shapesClass="servicesDecorShapesUp"
        linesLeftClass="servicesDecorLittleLinesLeft"
        linesUpClass="servicesDecorLinesUp"
        manyShapesClass="servicesDecorManyShapesDown"
        linesrightClass="servicesDecorLittleLinesRight"
      />
      <HeroTitleblock>
        <CrumbsItem
          parent="About us"
          name="Careers at Createx Agency"
          link="/about"
        />
        <HeroTitle title="Careers at Createx Agency" />
        <HeroText text="We’re looking for extraordinary talents! If you're passionate about SEO and digital marketing, we want to hear from you." />
        <CareersHomePhoneBlock/>
      </HeroTitleblock>
    </section>
  );
};

export default CareersHero;
