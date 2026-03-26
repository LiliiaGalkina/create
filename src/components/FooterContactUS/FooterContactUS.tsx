import style from "./footercontactus.module.scss";

const FooterContactUs = () => {
    return (
      <div className={style.content}>
        <h3 className={style.title}>CONTACT US</h3>
        <p> &#128421; (405) 555-0128</p>
        <p> &#9993; hello@createx.com</p>
      </div>
    );
}

export default FooterContactUs;