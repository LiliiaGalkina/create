import style from "./awardsblock.module.scss";
import Awards from "../Awards/Awards";

const AwardsBlock = () => {
    return ( <div className={style.awardsblock}>
        <div className={style.text}>Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</div>
        <Awards/>
    </div> );
}
 
export default AwardsBlock;