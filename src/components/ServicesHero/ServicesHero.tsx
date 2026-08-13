import style from "./serviceshero.module.scss";
import Crumbs from "../Crumbs/Crumbs";
import HeroTitle from "../HeroTitle/HeroTitle";
import Button from "../Button/Button";
import HeroPhoneBlock from "../HeroPhoneBlock/HeroPhoneBlock";
import HeroTitleblock from "../HeroTitleBlock/HeroTitleblock";
import HeroText from "../HeroText/HeroText";
import HeroPagesDecors from "../HeroPagesDecors/HeroPagesDecors";

const ServicesHero = () => {
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
        <Crumbs name="Services" />
        <HeroTitle title="Our services" />
        <HeroText text=" We offer more than services. Our agency provides solution to your top-priority concerns, involving customer targeting, email performance and sales growth. If there is no existing solution readily available, we create one, specifically to suit your business." />
      </HeroTitleblock>
      <div className={style.info}>
        <Button textButton="Start now" classDop="servicesHeroBtn" title="not implemented"/>
        <HeroPhoneBlock />
      </div>
    </section>
  );
};

export default ServicesHero;
