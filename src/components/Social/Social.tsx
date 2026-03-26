import style from "./social.module.scss";

const Social = () => {
    return (
      <div className={style.items}>
        <img src="./image/footer/facebook.svg" alt="facebook icon" />
        <img src="./image/footer/linked-In.svg" alt="linked-In icon" />
        <img src="./image/footer/twitter.svg" alt="twitter icon" />
        <img src="./image/footer/instagram.svg" alt="instagram icon" />
      </div>
    );
}

export default Social;