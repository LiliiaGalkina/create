import style from "./blogposts.module.scss";
import BlogPost from "../BlogPost/BlogPost";
import type React from "react";
import type {IPropsForBlogPosts } from "../../types";
import { useFilteredPosts } from "../../hooks/useFilteredPosts";

const BlogPosts:React.FC<IPropsForBlogPosts> = ({posts, currentCategory}) => {

  const filteredPosts = useFilteredPosts(posts, currentCategory);

  return (
    <div className={style.posts}>
      {filteredPosts.map((item) => (
        <BlogPost key={item.id} {...item} />
      ))}
    </div>
  );
};

export default BlogPosts;
