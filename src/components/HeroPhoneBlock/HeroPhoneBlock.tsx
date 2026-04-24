import style from "./herophoneblock.module.scss";

const HeroPhoneBlock = () => {
    return (
      <div className={style.phoneBlock}>
        <div className={style.phoneimg}>
          <img src="./image/services/hero-phone.svg" alt="phone icon" />
        </div>
        <div className={style.info}>
          <span className={style.text}>Call us</span>
          <span className={style.phone}>(405) 555-0128</span>
        </div>
      </div>
    );
}
 
export default HeroPhoneBlock;