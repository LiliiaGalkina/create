import style from "./getfreeseoform.module.scss";
import { useState } from "react";

const GetFreeSeoForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    const [communication, setCommunication] = useState(true);

  return (
    <form action="#" className={style.form}>
      <div className={style.items}>
        <div className={style.inputBlock}>
          <label htmlFor="name" className={style.label}>
            Name
          </label>
          <input
            type="text"
            className={style.input}
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={style.inputBlock}>
          <label htmlFor="email" className={style.label}>
            Email
          </label>
          <input
            type="email"
            className={style.input}
            id="email"
            placeholder="Your working email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.inputBlockBig}>
          <label htmlFor="url" className={style.label}>
            Your website URL
          </label>
          <input
            type="text"
            className={style.input}
            id="url"
            placeholder="http://yoursite.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
      </div>
      <div className={style.buttons}>
        <div className={style.checkBlock}>
          <input
            type="checkbox"
            name="communication"
            id="communication"
            className={style.communication}
            checked={communication}
            onChange={(e) => setCommunication(e.target.checked)}
          />
          <label htmlFor="communication" className={style.checkLabel}>
            I agree to receive communications from Createx SEO Agency
          </label>
        </div>
        <button type="submit" className={style.button}>
          Get a free analysis
        </button>
      </div>
    </form>
  );
};

export default GetFreeSeoForm;
