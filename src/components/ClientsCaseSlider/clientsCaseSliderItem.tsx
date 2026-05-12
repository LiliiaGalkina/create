import type React from "react";
import style from "./clientscaseslideritem.module.scss";
import type { IPropsClientsCaseSlider } from "../../types";
import CaseCardDigits from "../CaseCardDigits/CaseCardDigits";

const ClientsCaseSliderItem: React.FC<IPropsClientsCaseSlider> = ({
  logoImg,
  logoAlt,
  title,
  text,
  circle1,
  digit1,
  description1,
  circle2,
  digit2,
  description2,
  fon
}) => {
  return (
    <div
      className={fon ? style.sliderItemFon : style.sliderItem}
      style={{
        backgroundBlendMode: fon ? "darken" : "",
      }}
    >
      <div className={style.body}>
        <div className={style.up}>
          <img src={logoImg} alt={logoAlt} />
          <h4 className={style.title}>{title}</h4>
        </div>
        <p className={style.text} style={{ color: fon ? "#FFFFFF" : "" }}>
          {text}
        </p>
      </div>
      <div className={style.info}>
        <CaseCardDigits
          circle1={circle1}
          digit1={digit1}
          description1={description1}
          circle2={circle2}
          digit2={digit2}
          description2={description2}
        />
      </div>
    </div>
  );
};

export default ClientsCaseSliderItem;
