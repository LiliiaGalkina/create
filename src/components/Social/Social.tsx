import style from "./social.module.scss";

const Social = () => {
  return (
    <div className={style.items}>
      <a href="#/" className={style.link}>
        <img src="./image/footer/facebook.svg" alt="facebook icon" />
      </a>
      <a href="#/" className={style.link}>
        <img src="./image/footer/linked-In.svg" alt="linked-In icon" />
      </a>
      <a href="#/" className={style.link}>
        <img src="./image/footer/twitter.svg" alt="twitter icon" />
      </a>
      <a href="#/" className={style.link}>
        <img src="./image/footer/instagram.svg" alt="instagram icon" />
      </a>
    </div>
  );
};

export default Social;
