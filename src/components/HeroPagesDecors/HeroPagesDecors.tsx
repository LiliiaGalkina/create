import type React from "react";
import style from "./heropagesdecors.module.scss";
import type { IPropsHeroDecor } from "../../types";

const HeroPagesDecors:React.FC<IPropsHeroDecor> = ({shapesClass, linesLeftClass, linesUpClass, manyShapesClass, linesrightClass}) => {
    return (
      <>
        <img
          src="./image/heropages/hero-decor-shapes-up-to.png"
          alt="decor two green shapes"
          className={style[shapesClass]}
        />
        <img
          src="./image/heropages/hero-decor-littlelines-left.png"
          alt="decor many white lines"
          className={style[linesLeftClass]}
        />
        <img
          src="./image/heropages/hero-decor-lines-up.png"
          alt="decor three curved green lines"
          className={style[linesUpClass]}
        />
        <img
          src="./image/heropages/hero-decor-down-shapes-many.png"
          alt="decor many shapes"
          className={style[manyShapesClass]}
        />
        <img
          src="./image/heropages/hero-decor-littlelines-right.png"
          alt="decor many white lines"
          className={style[linesrightClass]}
        />
      </>
    );
}
 
export default HeroPagesDecors;