import BlogHeroSearch from "../BlogHeroSearch/BlogHeroSearch";
import Crumbs from "../Crumbs/Crumbs";
import HeroPagesDecors from "../HeroPagesDecors/HeroPagesDecors";
import HeroText from "../HeroText/HeroText";
import HeroTitle from "../HeroTitle/HeroTitle";
import HeroTitleblock from "../HeroTitleBlock/HeroTitleblock";
import style from "./bloghero.module.scss";

const BlogHero = () => {
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
            <Crumbs name="Blog" />
            <HeroTitle title="Blog" />
            <HeroText text="Thoughts, trends and up-to-date news in search and digital marketing. Subsribe to our blog and receive latest news weekly." />
            <BlogHeroSearch/>
          </HeroTitleblock>
        </div>
      </section>
    );
}
 
export default BlogHero;