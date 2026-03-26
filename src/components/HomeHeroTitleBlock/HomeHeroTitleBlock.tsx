import style from "./homeherotitleblock.module.scss";
import Button from "../Button/Button";

const HomeHeroTitleBlock = () => {
  return (
    <div className={style.titleBlock}>
      <img src="./image/home/hero-lines-up.png" alt="five white lines" className={style.decor}/>
      <h1 className={style.title}>
        Best <span>SEO & Marketing</span> Solutions for You
      </h1>
      <Button textButton="Get a free analysis" classDop="heroButton" />
    </div>
  );
};

export default HomeHeroTitleBlock;
