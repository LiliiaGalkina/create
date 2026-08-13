import { useState } from "react";
import style from "./blogherosearch.module.scss";

const BlogHeroSearch = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
      <div className={style.search}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search the blog"
          className={style.input}
          required
        />
        <button className={style.btn} title="not implemented">Search</button>
      </div>
    );
}
 
export default BlogHeroSearch;