import type React from "react";
import style from "./hero.module.scss";
import CrumbsItem from "../../CrumbsItem/CrumbsItem";
import HeroTitleblock from "../../HeroTitleBlock/HeroTitleblock";
import HeroTitle from "../../HeroTitle/HeroTitle";

interface IPropsCaseStudiesItemPage {
    imgmain: string;
    imgLogo: string;
    altLogo: string;
    title: string;
}

const Hero:React.FC<IPropsCaseStudiesItemPage> = ({imgmain, imgLogo, altLogo, title}) => {
    return (
      <section
        className={style.hero}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgmain}) center/cover no-repeat`,
        }}
      >
        <HeroTitleblock>
          <CrumbsItem parent="Case Studies" name={title} link="casestudies" />
          <img src={imgLogo} alt={altLogo}  className={style.logo}/>
          <HeroTitle title={title}/>
        </HeroTitleblock>

        
      </section>
    );
}
 
export default Hero;