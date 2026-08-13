import { useState } from "react";
import style from "./aboutfreeanalysisform.module.scss";
import Button from "../Button/Button";

const AboutFreeAnalysisForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [site, setSite] = useState("");

  return (
    <section className={style.freeAnalysis}>
      <h3 className={style.title}>Get a Free SEO Analysis!</h3>
      <form action="#" className={style.form}>
        <div className={style.inputBlock}>
          <label htmlFor="name" className={style.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className={style.field}
          />
        </div>
        <div className={style.inputBlock}>
          <label htmlFor="email" className={style.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your working email"
            required
            className={style.field}
          />
        </div>
        <div className={style.inputBlock}>
          <label htmlFor="site" className={style.label}>
            Your website URL
          </label>
          <input
            type="text"
            id="site"
            value={site}
            onChange={(e) => setSite(e.target.value)}
            placeholder="http://yoursite.com"
            required
            className={style.field}
          />
        </div>
        <Button textButton="Analyse your site" classDop="aboutFormBtn" title="not implemented"/>
      </form>
      <img
        src="./image/about/decor-form-lines.png"
        alt="three white lines"
        className={style.decor}
      />
    </section>
  );
};

export default AboutFreeAnalysisForm;
