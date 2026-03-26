import style from "./footerawards.module.scss";

const FooterAwards = () => {
    return (
      <div className={style.awards}>
        <img src="./image/footer/award1.png" alt="award icon" />
        <img src="./image/footer/award2.png" alt="award icon" />
        <img src="./image/footer/award3.png" alt="award icon" />
        <img src="./image/footer/award4.png" alt="award icon" />
      </div>
    );
}

export default FooterAwards;