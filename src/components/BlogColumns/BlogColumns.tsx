import type React from "react";
import BlogCategories from "../BlogCategories/BlogCategories";
import BlogPosts from "../BlogPosts/BlogPosts";
import BlogPostsTrend from "../BlogPostsTrend/BlogPostsTrend";
import BlogTags from "../BlogTags/BlogTags";
import style from "./blogcolumns.module.scss";
import type { IPropsBlogNewPosts } from "../../types";

const BlogColumns: React.FC<IPropsBlogNewPosts> = ({ posts }) => {
  return (
    <div className={style.columns}>
      <div className={style.posts}>
        <BlogPosts posts={posts}/>
      </div>
      <div className={style.dopInfo}>
        <BlogCategories />
        <BlogPostsTrend />
        <BlogTags />
      </div>
    </div>
  );
};

export default BlogColumns;
