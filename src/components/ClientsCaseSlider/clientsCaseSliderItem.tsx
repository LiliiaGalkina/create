import type React from "react";
import style from "./clientscaseslideritem.module.scss";
import type { clientsCaseSliderProps } from "../../types";

const ClientsCaseSliderItem:React.FC<clientsCaseSliderProps> = ({logoImg, logoAlt, title, text, img1, alt1, digit1, description1, img2, alt2, digit2, description2, fon, fonImg}) => {
    return (
      <div
        className={style.sliderItem}
        style={{
          background: fon ? `#00000080 url(${fonImg})` : "",
          color: fon ? "#FFFFFF" : "",
          backgroundBlendMode: fon ? "darken" : "",
        }}
      >
        <div className={style.up}>
          <img src={logoImg} alt={logoAlt} />
          <h4 className={style.title}>{title}</h4>
        </div>
        <div className={style.down}>
          <p className={style.text} style={{ color: fon ? "#FFFFFF" : "" }}>
            {text}
          </p>
          <div className={style.info}>
            <div className={style.infoItem}>
              <img src={img1} alt={alt1} className={style.infoImg} />
              <p className={style.infoText}>
                <span
                  className={style.digit}
                  style={{ color: fon ? "#FFFFFF" : "" }}
                >
                  {digit1}
                </span>
                <span className={style.description}>{description1}</span>
              </p>
            </div>
            <div className={style.infoItem}>
              <img src={img2} alt={alt2} className={style.infoImg} />
              <p className={style.infoText}>
                <span
                  className={style.digit}
                  style={{ color: fon ? "#FFFFFF" : "" }}
                >
                  {digit2}
                </span>
                <span className={style.description}>{description2}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default ClientsCaseSliderItem;