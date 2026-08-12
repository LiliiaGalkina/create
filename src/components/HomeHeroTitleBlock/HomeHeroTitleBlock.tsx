import style from "./homeherotitleblock.module.scss";

type TitleBlockProps = {
  onCtaClick: () => void;
};

const HomeHeroTitleBlock = ({ onCtaClick }: TitleBlockProps) => {
  return (
    <div className={style.titleBlock}>
      <img
        src="./image/home/hero-lines-up.png"
        alt="five white lines"
        className={style.decor}
      />
      <h1 className={style.title}>
        Best <span>SEO & Marketing</span> Solutions for You
      </h1>
      <button className={style.heroButton} onClick={onCtaClick}>
        Get a free analysis
      </button>
    </div>
  );
};

export default HomeHeroTitleBlock;
