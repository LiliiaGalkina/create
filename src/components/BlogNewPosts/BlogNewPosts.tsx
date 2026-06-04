import style from "./blognewposts.module.scss";
import BlogPost from "../BlogPost/BlogPost";
import type React from "react";
import type { IPropsBlogNewPosts } from "../../types";


const BlogNewPosts: React.FC<IPropsBlogNewPosts> = ({ posts }) => {
  return (
    <div className={style.newPosts}>
      {posts.slice(0, 2).map((item) => (
        <BlogPost key={item.id} {...item} />
      ))}
    </div>
  );
};
 
export default BlogNewPosts;