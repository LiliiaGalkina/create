import style from "./casestydiesitem.module.scss";

const DopInfo = () => {
  return (
    <div className={style.dopBlock}>
      <div className={style.dopBlockInfo}>
        <h3 className={style.dopTitle}>About the client</h3>
        <p className={style.dopBlockText}>
          At facilisi sapien posuere eget nunc senectus proin nullam. Tortor
          senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing
          eget diam nisi. Orci, consectetur vulputate metus ornare pharetra,
          neque, fermentum.
        </p>
        <h3 className={style.dopBlockTitle}>Industry</h3>
        <p className={style.dopBlockText}>Electric company - B2B</p>
        <h3 className={style.dopTitle}>Services rendered</h3>
        <ul className={style.list}>
          <li className={style.listItem}>Remarketing</li>
          <li className={style.listItem}>Conversion Rate Optimization</li>
          <li className={style.listItem}>User Testing</li>
          <li className={style.listItem}>PPC Management</li>
          <li className={style.listItem}>Usability Testing</li>
        </ul>
      </div>
      <div className={style.dopBlockTags}>
        <span className={style.tag} title="логика не реализована">
          #SEO
        </span>
        <span className={style.tag} title="логика не реализована">
          #research
        </span>
        <span className={style.tag} title="логика не реализована">
          #payed_traffic
        </span>
      </div>
      <div className={style.dopBlockSocial}>
        <h4 className={style.socialTitle}>Share:</h4>
        <a href="#" className={style.socialImg}>
          <img src="./image/casestudies/facebook.svg" alt="facebook icon" />
        </a>
        <a href="#" className={style.socialImg}>
          <img src="./image/casestudies/twitter.svg" alt="twitter icon" />
        </a>
        <a href="#" className={style.socialImg}>
          <img src="./image/casestudies/linkedin.svg" alt="linkedin icon" />
        </a>
      </div>
    </div>
  );
};

export default DopInfo;
