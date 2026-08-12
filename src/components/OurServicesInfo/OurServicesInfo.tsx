import style from "./ourservicesinfo.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const OurServicesInfo = () => {
  return (
    <div className={style.info}>
      <h3 className={style.title}>Complete Worflow For Any SEO Professional</h3>
      <ul className={style.list}>
        <li className={style.listitem}>
          Aenean enim tellus morbi nisl vulputate dictumst.
        </li>
        <li className={style.listitem}>Nibh sapien volutpat lacus augue.</li>
        <li className={style.listitem}>
          Vel in amet, placerat adipiscing est pharetra.
        </li>
        <li className={style.listitem}>
          Gravida ornare sit in et ut sit sem id.
        </li>
        <li className={style.listitem}>
          Ultrices pellentesque dictum enim egestas ac diam.
        </li>
        <li className={style.listitem}>
          Sit semper enim senectus integer ut turpis et.
        </li>
      </ul>
      <div className={style.buttons}>
        <Link to={"/services"}>
          <Button textButton="Learn more" classDop="ourServicesButtonWhite" />
        </Link>
        <Button
          textButton="Try SEO toolkit"
          classDop="ourServicesButtonBlue"
          title="not implemented"
        />
      </div>
    </div>
  );
};

export default OurServicesInfo;
