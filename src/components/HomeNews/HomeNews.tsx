import { homeNews } from "../../data";
import HomeNewsCard from "../HomeNewsCard/HomeNewsCard";
import HomeNewsTitle from "../HomeNewsTitle/HomeNewsTitle";
import style from "./homenews.module.scss";

const HomeNews = () => {
    return ( 
        <section className={style.news}>
            <HomeNewsTitle/>
            <div className={style.cards}>
                {
                homeNews.map((card) => (
                    <HomeNewsCard key={card.id} {...card}/>
                ))
                }
            </div>
        </section>
     );
}
 
export default HomeNews;