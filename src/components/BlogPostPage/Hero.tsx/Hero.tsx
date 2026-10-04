import type React from "react";
import style from "./hero.module.scss";
import CrumbsItem from "../../CrumbsItem/CrumbsItem";
import HeroTitleblock from "../../HeroTitleBlock/HeroTitleblock";
import HeroTitle from "../../HeroTitle/HeroTitle";
import { postsCategories } from "../../../data";
import HeroPagesDecors from "../../HeroPagesDecors/HeroPagesDecors";

interface IPropsBlogItemPage {
  title: string;
  category: number;
  date: string;
  autor: string;
}

const Hero: React.FC<IPropsBlogItemPage> = ({
  title,
  category,
  date,
  autor,
}) => {
  const postCategory = postsCategories.find(
    (item) => item.id === category,
  )?.name;
  return (
    <section className={style.hero}>
      <HeroPagesDecors
        shapesClass="aboutDecorShapesUp"
        linesLeftClass="aboutDecorLittleLinesLeft"
        linesUpClass="aboutDecorLinesUp"
        manyShapesClass="aboutDecorManyShapesDown"
        linesrightClass="aboutDecorLittleLinesRight"
      />
      <div className={style.container}>
        <HeroTitleblock>
          <CrumbsItem parent="Blog" name={title} link="/blog" />
          <HeroTitle title={title} />
          <div className={style.info}>
            <span className={style.category}>{postCategory}</span>
            <span className={style.date}>{date}</span>
            <span>{autor}</span>
          </div>
        </HeroTitleblock>
      </div>
    </section>
  );
};

export default Hero;
