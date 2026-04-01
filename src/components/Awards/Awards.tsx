import style from "./awards.module.scss";
import { awards } from "../../data";

const Awards = () => {
    return ( <div className={style.awards}>
        {
            awards.map((award) => (<div key={award.id} className={style.card}><img src={award.image} className={style.image} alt={award.alt} /> <p className={style.text}>{award.text}</p></div>))
        }  
    </div> );
}
 
export default Awards;