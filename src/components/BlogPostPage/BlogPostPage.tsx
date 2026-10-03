import { useMatch } from "react-router-dom";
import style from "./blogpostpage.module.scss";
import { posts } from "../../data";
import Hero from "./Hero.tsx/Hero";

const BlogPostPage = () => {
  const match = useMatch("/blog/:id");
  const postId = match?.params.id;

  if (!postId) {
    return null;
  }

  const numericId = parseInt(postId, 10);

  const postItem = posts.find((post) => Number(post.id) === numericId);

  if (!postItem) {
    return null;
  }
  return (
    <>
      <Hero
        title={postItem.title}
        category={postItem.category}
        date={postItem.date}
        autor={postItem.autor}
      />
      <div className="container">
        <div className={style.info}>
          <h2 className={style.title}>{postItem.title}</h2>
          <div className={style.mainimg}>
            <img src={postItem.img} alt={postItem.alt} />
          </div>
          <p className={style.text}>{postItem.text}</p>
          {postItem.content.map((itemText, index) => (
            <p className={style.text} key={index}>{itemText}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
