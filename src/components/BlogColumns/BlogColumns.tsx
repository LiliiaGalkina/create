import type React from "react";
import BlogCategories from "../BlogCategories/BlogCategories";
import BlogPosts from "../BlogPosts/BlogPosts";
import BlogPostsTrend from "../BlogPostsTrend/BlogPostsTrend";
import BlogTags from "../BlogTags/BlogTags";
import style from "./blogcolumns.module.scss";
import type { IPropsBlogNewPosts } from "../../types";
import { useState } from "react";

const BlogColumns: React.FC<IPropsBlogNewPosts> = ({ posts }) => {
  const [currentCategory, setCurrentCategory] = useState(0);

  return (
    <div className={style.columns}>
      <div className={style.posts}>
        <BlogPosts posts={posts} currentCategory={currentCategory} />
      </div>
      <div className={style.dopInfo}>
        <BlogCategories posts={posts} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
        <BlogPostsTrend />
        <BlogTags />
      </div>
    </div>
  );
};

export default BlogColumns;
