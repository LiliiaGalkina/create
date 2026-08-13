import style from "./ourservicesinfo.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import type { OurServicesInfoProps } from "../../types";


const OurServicesInfo: React.FC<OurServicesInfoProps> = ({id, title, items }) => {
  return (
    <div className={style.info}>
      <h3 className={style.title}>{title}</h3>
      {items.length > 0 && (
        <ul className={style.list}>
          {items.map((itemText, index) => (
            <li key={index} className={style.listitem}>
              {itemText}
            </li>
          ))}
        </ul>
      )}
      <div className={style.buttons}>
        <Link to={`/service/${id}`}>
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
