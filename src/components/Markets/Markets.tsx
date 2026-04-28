import style from "./markets.module.scss";
import { markets } from "../../data";
import MarketsItem from "../MarketsItem/MarketsItem";

const Markets = () => {
    return (
      <section className={style.markets}>
        <div className="container">
          <h2 className={style.title}>Markets in which we operate</h2>
          <div className={style.items}>
            {markets.map((item) => (
              <MarketsItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    );
}
 
export default Markets;