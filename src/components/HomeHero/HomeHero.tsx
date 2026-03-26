import style from "./homehero.module.scss";
import HomeHeroTitleBlock from "../HomeHeroTitleBlock/HomeHeroTitleBlock";
import HomeHeroImageBlock from "../HomeHeroImageBlock/HomeHeroImageBlock";
import HeroCards from "../HeroCards/HeroCards";

const HomeHero = () => {
    return (
      <div className={style.hero}>
        <div className="container">
          <HomeHeroTitleBlock />
          <HeroCards/>
        </div>
        <HomeHeroImageBlock />
        <img src="./image/home/hero-lines.png" alt="three green curves" className={style.decor}/>
      </div>
    );
}
 
export default HomeHero;