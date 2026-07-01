import { seoCards } from "../../../data";
import style from "./serviceitemseo.module.scss";
import ServiceItemSeoCard from "./ServiceItemSeoCard";

const ServiceItemSeo = () => {
    return (
      <section className={style.seo}>
        <h3 className={style.title}>SEO services include</h3>
        <div className={style.cards}>{seoCards.map((card) => <ServiceItemSeoCard key={card.id} {...card}/>)}</div>
      </section>
    );
}
 

export default ServiceItemSeo;