import style from "./herocards.module.scss";
import { heroItems } from "../../data";

const HeroCards = () => {
    return ( 
        <div className={style.cards}>
            {
                heroItems.map((item) => (
                    <div className={style.card} key={item.id}>
                        <img src={item.img} alt={item.alt} className={style.image}/>
                        <p className={style.title}>{item.title}</p>
                    </div>
                ))
            }
        </div>
     );
}
 
export default HeroCards;