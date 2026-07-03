import type React from "react";
import CrumbsItem from "../../CrumbsItem/CrumbsItem";
import HeroPagesDecors from "../../HeroPagesDecors/HeroPagesDecors";
import HeroText from "../../HeroText/HeroText";
import HeroTitle from "../../HeroTitle/HeroTitle";
import HeroTitleblock from "../../HeroTitleBlock/HeroTitleblock";
import style from "./serviceitemhero.module.scss";
import type { TPropsServiceItemPage } from "../../../types";



const ServiceItemHero:React.FC<TPropsServiceItemPage> = ({title, text}) => {
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
            <CrumbsItem parent="Services" name={title} link="/services"/>
            <HeroTitle title={title} />
            <HeroText text={text} />
          </HeroTitleblock>
        </div>
      </section>
    );
}
 
export default ServiceItemHero;