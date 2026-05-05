import style from "./homeherodecors.module.scss";

const HeroPagesDecors = () => {
    return (
      <>
        <img
          src="./image/heropages/hero-decor-shapes-up-to.png"
          alt="decor two green shapes"
          className={style.decorShapesUp}
        />
        <img
          src="./image/heropages/hero-decor-littlelines-left.png"
          alt="decor many white lines"
          className={style.decorLittleLinesLeft}
        />
        <img
          src="./image/heropages/hero-decor-lines-up.png"
          alt="decor three curved green lines"
          className={style.decorLinesUp}
        />
        <img
          src="./image/heropages/hero-decor-down-shapes-many.png"
          alt="decor many shapes"
          className={style.decorManyShapesDown}
        />
        <img
          src="./image/heropages/hero-decor-littlelines-right.png"
          alt="decor many white lines"
          className={style.decorLittleLinesRight}
        />
      </>
    );
}
 
export default HeroPagesDecors;