import type React from "react";
import style from "./blogpoststrend.module.scss";
import type { IPropsTrend } from "../../types";

const BlogPostTrend:React.FC<IPropsTrend> = ({image, alt, date, title}) => {
    return ( 
        <div className={style.trend}>
            <img src={image} alt={alt} className={style.image}/>
            <div className={style.info}>
                <div className={style.date}>
                    <img src="./image/blog/clock-icon.svg" alt="clock icon" className={style.icon}/>
                    <span className={style.text}>{date}</span>
                </div>
                <h4 className={style.subtitle}>{title}</h4>
            </div>
        </div>
     );
}
 
export default BlogPostTrend;