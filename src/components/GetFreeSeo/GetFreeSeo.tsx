import style from "./getfreeseo.module.scss";
import GetFreeSeoForm from "../GetFreeSeoForm/GetFreeSeoForm";

const GetFreeSeo = () => {
  return (
    <section className={style.getfreeseo}>
      <div className="container">
        <div className={style.items}>
          <div className={style.itemImg}>
            <img
              src="./image/home/free-seo-form.png"
              alt="a woman near a board with graphs with a pointer in her hand"
            />
          </div>
          <div className={style.info}>
            <h2 className={style.title}>Get a Free SEO Analysis!</h2>
            <GetFreeSeoForm/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetFreeSeo;
