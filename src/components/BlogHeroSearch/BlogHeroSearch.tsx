import style from "./blogherosearch.module.scss";

const BlogHeroSearch = () => {
    return (
      <div className={style.search}>
        <input
          type="text"
          placeholder="Search the blog"
          className={style.input}
        />
        <button className={style.btn}>Search</button>
      </div>
    );
}
 
export default BlogHeroSearch;