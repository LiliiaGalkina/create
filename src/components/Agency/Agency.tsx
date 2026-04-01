import style from "./agency.module.scss";
import Button from "../Button/Button";

const Agency = () => {
  return (
    <section className={style.agency}>
      <div className="container">
        <div className={style.items}>
          <div className={style.info}>
            <h2 className={style.title}>Createx Agency </h2>
            <p className={style.text}>
              Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes,
              viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam
              elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor
              ultrices mattis eget orci eu nisi sed augue odio. Et senectus
              risus, pharetra, tristique libero. Dolor risus ac quam dictum
              mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis
              et quis hendrerit. Cras at ac magna ultricies orci.
            </p>
            <Button textButton="More about us" classDop="agencyButton" />
          </div>
          <div className={style.image}>
            <img src="./image/home/agency.png" alt="agency employees" />
          </div>
        </div>
      </div>
      <img
        src="./image/home/agency-fon.png"
        alt="grey abstractive"
        className={style.fon}
      />
    </section>
  );
};

export default Agency;
