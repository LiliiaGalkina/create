import AboutSeoAgencyLabel from "../AboutSeoAgencyLabel/AboutSeoAgencyLabel";
import style from "./aboutseoagency.module.scss";

const AboutSeoAgency = () => {
  return (
    <div className={style.items}>
      <AboutSeoAgencyLabel />
      <div className={style.twoImages}>
        <div className={style.imgwrapper}>
          <img
            src="./image/about/agency1.jpg"
            alt="several people at a table in front of a laptop"
            className={style.image}
          />
        </div>
        <div className={style.imgwrapper}>
          <img
            src="./image/about/agency2.jpg"
            alt="an open laptop on the table"
            className={style.image}
          />
        </div>
      </div>
      <div className={style.upImage}>
        <img
          src="./image/about/agency3.jpg"
          alt="a guy with a pen in his hand "
          className={style.image}
        />
      </div>
      <div className={style.oneImage}>
        <img
          src="./image/about/agency4.jpg"
          alt="a guy with a pen in his hand "
          className={style.image}
        />
      </div>
    </div>
  );
};

export default AboutSeoAgency;
