import type { IPropsBenefits } from "../../types";
import style from "./benefitsitem.module.scss";

const BenefitsItem:React.FC<IPropsBenefits> = ({image, altImg, title, text}) => {
    return ( <div className={style.item}>
        <img src={image} alt={altImg} className={style.image} />
        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{text}</p>
    </div> );
}
 
export default BenefitsItem;