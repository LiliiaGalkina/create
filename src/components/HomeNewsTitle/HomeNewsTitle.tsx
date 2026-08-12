import { Link } from "react-router-dom";
import Button from "../Button/Button";
import style from "./homenewstitle.module.scss";

const HomeNewsTitle = () => {
  return (
    <div className={style.titleBlock}>
      <h2 className={style.title}>Latest news</h2>
      <p className={style.text}>
        Check more posts in our blog for featured news and advertising insights
      </p>
      <Link to={"/blog"}>
        <Button textButton="Go to blog" classDop="homeNewsButton" />
      </Link>
    </div>
  );
};

export default HomeNewsTitle;
