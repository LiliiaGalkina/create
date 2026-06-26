import style from "./blogcategories.module.scss";
import type { IPropsBlogNewPosts } from "../../types";
import { useCategoriesWithCount } from "../../hooks/useCategoriesWithCount";

const BlogCategories: React.FC<IPropsBlogNewPosts> = ({
  posts,
  currentCategory,
  setCurrentCategory,
}) => {
  const categoriesWithCount = useCategoriesWithCount(posts);

const changeCategory = (idCategory: number) => {
  if (setCurrentCategory) {
    setCurrentCategory(idCategory);
  }
};

  return (
    <section className={style.categoriesBlock}>
      <h3 className={style.title}>Blog Categories</h3>
      <ul className={style.categories}>
        {categoriesWithCount.map((category) => (
          <li
            key={category.id}
            className={style.category}
            onClick={() => changeCategory(category.id)}
            style={{ color: category.id === currentCategory ? "#7772f1" : "" }}
          >
            <span className={style.name} style={{ color: "inherit" }}>
              {category.name}
            </span>
            <span className={style.count}>{category.count}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogCategories;
