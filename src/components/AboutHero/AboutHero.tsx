import Crumbs from "../Crumbs/Crumbs";
import HeroCards from "../HeroCards/HeroCards";
import HeroPagesDecors from "../HeroPagesDecors/HeroPagesDecors";
import HeroText from "../HeroText/HeroText";
import HeroTitle from "../HeroTitle/HeroTitle";
import HeroTitleblock from "../HeroTitleBlock/HeroTitleblock";
import style from "./abouthero.module.scss";

const AboutHero = () => {
  return (
    <div className={style.hero}>
      <HeroPagesDecors
        shapesClass="aboutDecorShapesUp"
        linesLeftClass="aboutDecorLittleLinesLeft"
        linesUpClass="aboutDecorLinesUp"
        manyShapesClass="aboutDecorManyShapesDown"
        linesrightClass="aboutDecorLittleLinesRight"
      />
      <div className="container">
        <HeroTitleblock>
          <Crumbs name="About us" />
          <HeroTitle title="About Us" />
          <HeroText text="Our agency has been successfully operating in digital marketing since 2012. We are proud to offer you quality and exemplary service. We help our clients get better results with our creative and data-driven approach to online advertising." />
        </HeroTitleblock>
        <HeroCards />
      </div>
    </div>
  );
};

export default AboutHero;
