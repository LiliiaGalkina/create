import style from "./blogsubscribe.module.scss";
import BlogSubscribeForm from "./BlogSubscribeForm";

const BlogSubscribe = () => {
    return (
      <section className={style.subscribe}>
        <div className="container">
          <div className={style.items}>
            <BlogSubscribeForm />
            <div className={style.image}>
              <img
                src="./image/blog/subscribe.png"
                alt="a stylized man points at a screen with blogs"
              />
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default BlogSubscribe;