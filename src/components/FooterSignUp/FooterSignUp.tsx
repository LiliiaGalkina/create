import { useState } from "react";
import style from "./footersignup.module.scss";

const FooterSignUp = () => {
    const [email, setEmail] = useState("");

    return (
      <form action="#" className={style.form}>
        <h3 className={style.title}>SIGN UP TO OUR NEWSLETTER</h3>
        <div className={style.emailBlock}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={style.email}
            required
          />
          <button type="submit" className={style.button}>
            <img src="./image/footer/arrow-right.svg" alt="arrow right" />
          </button>
        </div>
        <p className={style.text}>
          <sup>*</sup>Subscribe to our newsletter to receive communications and
          early updates from Createx SEO Agency.
        </p>
      </form>
    );
}

export default FooterSignUp;