import AboutCoreValuesItems from "../AboutCoreValuesItems/AboutCoreValuesItems";
import style from "./aboutcorevalues.module.scss";

const AboutCoreValues = () => {
  return (
    <section className={style.coreValues}>
      <h3 className={style.title}>The core values we stand for</h3>
      <div className={style.content}>
        <AboutCoreValuesItems />
      </div>
    </section>
  );
};

export default AboutCoreValues;
