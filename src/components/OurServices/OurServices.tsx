import style from "./ourservices.module.scss";
import OurServicesButtons from "../OurServicesButtons/OurServicesButtons";
import OurServicesInfo from "../OurServicesInfo/OurServicesInfo";
import OurServicesImages from "../OurServicesImages/OurServicesImages";

const OurServices = () => {
    return (
      <section className={style.ourServices}>
        <div className="container">
          <h2 className={style.title}>Our services</h2>
          <OurServicesButtons/>
          <div className={style.items}>
            <OurServicesInfo/>
            <OurServicesImages/>
          </div>
        </div>
      </section>
    );
}
 
export default OurServices;