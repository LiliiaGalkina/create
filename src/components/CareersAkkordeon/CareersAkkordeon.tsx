import { careersAkkordeon } from "../../data";
import CareersAkkordeonItem from "../CareersAkkordeonItem/CareersAkkordeonItem";
import style from "./careersakkordeon.module.scss";

const CareersAkkordeon = () => {
  return (
    <div className={style.akkordeon}>
      <div className="container">
        {careersAkkordeon.map((item) => (
          <CareersAkkordeonItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CareersAkkordeon;
