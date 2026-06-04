import style from "./blogcategories.module.scss";
import { postsCategories } from "../../data";

const BlogCategories = () => {
  return (
    <section className={style.categoriesBlock}>
      <h3 className={style.title}>Blog Categories</h3>
      <ul className={style.categories}>
        {postsCategories.map((category) => (
          <li key={category.id} className={style.category}>
            <span className={style.name}>{category.name}</span>
            <span className={style.count}>7</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogCategories;
