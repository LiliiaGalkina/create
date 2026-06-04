import style from "./blogposts.module.scss";
import BlogPost from "../BlogPost/BlogPost";
import type React from "react";
import type { IPropsBlogNewPosts } from "../../types";

const BlogPosts:React.FC<IPropsBlogNewPosts> = ({posts}) => {

  return (
    <div className={style.posts}>
      {posts.slice(2).map((item) => (
        <BlogPost key={item.id} {...item} />
      ))}
    </div>
  );
};

export default BlogPosts;
