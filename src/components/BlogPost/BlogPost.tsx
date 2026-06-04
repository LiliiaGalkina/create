import type React from "react";
import style from "./blogpost.module.scss";
import type { IPropsPosts } from "../../types";
import { postsCategories } from "../../data";

const BlogPost:React.FC<IPropsPosts> = ({img, alt, category, date, autor, title, text}) => {
  const postCategory = postsCategories.find((item) => item.id === category)?.name;
    
  return (
      <div className={style.post}>
        <img src={img} alt={alt} className={style.image} />
        <div className={style.content}>
          <div className={style.info}>
            <span className={style.category}>{postCategory}</span>
            <div className={style.date}>
              <img src="./image/blog/clock-icon.svg" alt="clock icon" />
              <span>{date}</span>
            </div>
            <div className={style.autor}>
              <img
                src="./image/blog/profile-icon.svg"
                alt="profile icon"
              />
              <span>{autor}</span>
            </div>
          </div>
          <h4 className={style.title}>{title}</h4>
          {text && <p className={style.text}>{text}</p>}
          <a href="#" className={style.link}>
            Read more <span className={style.arrow}> &rarr;</span>
          </a>
        </div>
      </div>
    );
}
 
export default BlogPost;