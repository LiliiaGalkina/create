import HeroPhoneBlock from "../HeroPhoneBlock/HeroPhoneBlock";
import style from "./careersherophoneblock.module.scss";

const CareersHomePhoneBlock = () => {
  return (
    <div className={style.phoneBlock}>
      <HeroPhoneBlock
        img="./image/careers/chat.svg"
        alt="chat icon"
        text1="Talk to us"
        text2="hello@createx.com"
      />
      <div className={style.line}></div>
      <HeroPhoneBlock
        img="./image/careers/phone.svg"
        alt="phone icon"
        text1="Call us"
        text2="(405) 555-0128"
      />
    </div>
  );
};

export default CareersHomePhoneBlock;
