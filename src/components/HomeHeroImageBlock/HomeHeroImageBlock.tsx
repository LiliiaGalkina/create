import style from "./homeheroimageblock.module.scss";

const HomeHeroImageBlock = () => {
    return (
      <div className={style.imageBlock}>
        <img
          src="./image/home/hero-shape.png"
          alt="grey abstractive"
          className={style.fon}
        />
        <img
          src="./image/home/hero-main.png"
          alt="a man is sitting next to laptop"
          className={style.mainImg}
        />
        <img src="./image/home/hero-shapes.png" alt="two green clips" className={style.clips} />
        <img src="./image/home/hero-lines-down.png" alt="five white lines" className={style.decor}/>
      </div>
    );
}
 
export default HomeHeroImageBlock;