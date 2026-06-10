import style from "./blogposts.module.scss";
import BlogPost from "../BlogPost/BlogPost";
import type React from "react";
import type { IPropsForBlogPosts } from "../../types";
import { useFilteredPosts } from "../../hooks/useFilteredPosts";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

const BlogPosts: React.FC<IPropsForBlogPosts> = ({
  posts,
  currentCategory,
}) => {
  const filteredPosts = useFilteredPosts(posts, currentCategory);

 const [currentPage, setCurrentPage] = useState<number>(1);
 const [totalPages, setTotalPages] = useState<number>(0);
 const itemsPerPage = 6;

 useEffect(() => {
   setTotalPages(Math.ceil(filteredPosts.length / itemsPerPage));
 }, [filteredPosts])


   const handlePageChange = (page: number) => {
     setCurrentPage(page);
   };

   const startIndex = (currentPage - 1) * itemsPerPage;
   const currentItems = filteredPosts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className={style.posts}>
        {currentItems &&
          currentItems.map((item) => <BlogPost key={item.id} {...item} />)}
      </div>
      {currentItems && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default BlogPosts;
