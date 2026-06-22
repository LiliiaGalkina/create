import style from "./blogsubscribe.module.scss";

const BlogSubscribeForm = () => {
    return (
      <div className={style.content}>
        <h2 className={style.title}>Subsribe to our blog</h2>
        <p className={style.text}>
          And receive latest trends in search, marketing, digital and news.
        </p>
        <form action="#" className={style.form}>
          <label htmlFor="email" className={style.label}>
            Email
          </label>
          <div className={style.inputBlock}>
            <input
              type="email"
              id="email"
              className={style.email}
              placeholder="Your working email"
              required
            />
            <button type="submit" className={style.btn}>
              Subscribe
            </button>
          </div>
          <div className={style.checkBlock}>
            <input type="checkbox" id="agree" className={style.check} />
            <label htmlFor="agree" className={style.checkLabel}>
              I agree to receive communications from Createx SEO Agency.
            </label>
          </div>
        </form>
      </div>
    );
}
 
export default BlogSubscribeForm;