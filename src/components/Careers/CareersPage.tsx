import CareersAkkordeon from "../CareersAkkordeon/CareersAkkordeon";
import CareersForm from "../CareersForm/CareersForm";
import CareersHero from "../CareersHero/CareersHero";
import style from "./careerspage.module.scss";

const CareersPage = () => {
  return (
    <main>
      <CareersHero />
      <CareersAkkordeon />
      <div className="container">
        <section className={style.careersFormItems}>
          <div className={style.info}>
            <h3 className={style.title}>
              Didn’t find what you were looking for?
            </h3>
            <p className={style.text}>
              Send your CV or subscribe to our newsletter to receive information
              about new vacancies.
            </p>
          </div>
          <div className={style.formContainer}>
            <CareersForm/>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CareersPage;
