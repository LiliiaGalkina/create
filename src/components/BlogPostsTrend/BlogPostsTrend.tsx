import style from "./blogpoststrend.module.scss";
import { postsTrend } from "../../data";
import BlogPostTrend from "./BlogPostTrend";
import { sortArrByDate } from "../../helpers";

const BlogPostsTrend = () => {
const postsTrendSort = sortArrByDate(postsTrend);

  return (
    <section className={style.trendBlock}>
      <h3 className={style.title}>Now Trending</h3>
      <div className={style.trends}>
        {
            postsTrendSort.map((item) => <BlogPostTrend key={item.id} {...item}/>)
        }
      </div>
    </section>
  );
};

export default BlogPostsTrend;
