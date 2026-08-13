import { tags } from "../../data";
import style from "./blogtags.module.scss";

const BlogTags = () => {
    return (
      <section className={style.tagsBlock}>
        <h3 className={style.title}>Tags</h3>
        <div className={style.tags}>
            {tags.map((tag) => <button key={tag.id} title="not implemented" className={style.tag}>#{tag.name}</button>)}
        </div>
      </section>
    );
}
 
export default BlogTags;