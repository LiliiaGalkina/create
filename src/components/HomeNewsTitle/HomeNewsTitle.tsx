import Button from "../Button/Button";
import style from "./homenewstitle.module.scss";

const HomeNewsTitle = () => {
    return (
      <div className={style.titleBlock}>
        <h2 className={style.title}>Latest news</h2>
        <p className={style.text}>
          Check more posts in our blog for featured news and advertising
          insights
        </p>
        <Button textButton="Go to blog" classDop="homeNewsButton"/>
      </div>
    );
}
 
export default HomeNewsTitle;