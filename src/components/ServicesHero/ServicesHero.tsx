import style from "./serviceshero.module.scss";
import Crumbs from "../Crumbs/Crumbs";
import HeroTitle from "../HeroTitle/HeroTitle";
import Button from "../Button/Button";
import HeroPhoneBlock from "../HeroPhoneBlock/HeroPhoneBlock";

const ServicesHero = () => {
    return (
      <section className={style.hero}>
   
        <img
          src="./image/hero-decor-shapes-up-to.png"
          alt="decor two green shapes"
          className={style.decorShapesUp}
        />
        <img
          src="./image/hero-decor-littlelines-left.png"
          alt="decor many white lines"
          className={style.decorLittleLinesLeft}
        />
        <img
          src="./image/hero-decor-lines-up.png"
          alt="decor three curved green lines"
          className={style.decorLinesUp}
        />
        <img
          src="./image/hero-decor-down-shapes-many.png"
          alt="decor many shapes"
          className={style.decorManyShapesDown}
        />
        <img
          src="./image/hero-decor-littlelines-right.png"
          alt="decor many white lines"
          className={style.decorLittleLinesRight}
        />
        <div className={style.titleBlock}>
          <Crumbs name="Services" />
          <HeroTitle title="Our services" />
          <p className={style.text}>
            We offer more than services. Our agency provides solutions to your
            top-priority concerns, involving customer targeting, email
            performance and sales growth. If there is no existing solution
            readily available, we create one, specifically to suit your
            business.
          </p>
        </div>
          <div className={style.info}>
            <Button textButton="Start now" classDop="servicesHeroBtn"/>
            <HeroPhoneBlock/>
          </div>
      </section>
    );
}
 
export default ServicesHero;