import { posts } from "../../data";
import { sortArrByDate } from "../../helpers";
import BlogColumns from "../BlogColumns/BlogColumns";
import BlogHero from "../BlogHero/BlogHero";
import BlogNewPosts from "../BlogNewPosts/BlogNewPosts";
import BlogSubscribe from "../BlogSubscribe/BlogSubscribe";

const BlogPage = () => {
      const sortedPosts = sortArrByDate(posts);
  return (
    <main>
      <BlogHero />
      <div className="container">
        <BlogNewPosts posts={sortedPosts} />
        <BlogColumns posts={sortedPosts}/>
      </div>
      <BlogSubscribe/>
    </main>
  );
};

export default BlogPage;
