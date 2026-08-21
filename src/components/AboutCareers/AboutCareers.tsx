import { Link } from "react-router-dom";
import Button from "../Button/Button";
import style from "./aboutcareers.module.scss";

const AboutCareers = () => {
  return (
    <section className={style.careers}>
      <div className="container">
        <div className={style.items}>
          <div className={style.itemImg}>
            <img src="./image/about/careers.png" alt="a man runs" />
          </div>
          <div className={style.itemInfo}>
            <h3 className={style.title}>Careers at Createx Agency</h3>
            <p className={style.text}>
              Ready to join us on our mission to deliver the best sales
              development services to businesses around the globe? We’re hiring!
            </p>
            <Link to={"/careers"}>
              <Button textButton="See careers &rarr;" classDop="careersBtn" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCareers;
