import AboutSeoAgencyLabel from "../AboutSeoAgencyLabel/AboutSeoAgencyLabel";
import style from "./aboutseoagency.module.scss";

const AboutSeoAgency = () => {
  return (
    <div className={style.items}>
      <AboutSeoAgencyLabel />
      <div className={style.twoImages}>
        <div className={style.imgwrapper}>
          <img
            src="./image/about/agency1.png"
            alt="several people at a table in front of a laptop"
            className={style.image}
          />
        </div>
        <div className={style.imgwrapper}>
          <img
            src="./image/about/agency2.png"
            alt="an open laptop on the table"
            className={style.image}
          />
        </div>
      </div>
      <div className={style.upImage}>
        <img
          src="./image/about/agency3.png"
          alt="a guy with a pen in his hand "
          className={style.image}
        />
      </div>
      <div className={style.oneImage}>
        <img
          src="./image/about/agency4.png"
          alt="a guy with a pen in his hand "
          className={style.image}
        />
      </div>
    </div>
  );
};

export default AboutSeoAgency;
