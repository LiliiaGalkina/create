import style from "./footer.module.scss";
import Logo from "../Logo/Logo";
import Social from "../Social/Social";
import FooterMenuColumn from "../FooterMenuColumn/FooterMenuColumn";
import FooterContactUs from "../FooterContactUS/FooterContactUS";
import FooterSignUp from "../FooterSignUp/FooterSignUp";
import FooterAwards from "../FooterAwards/FooterAwards";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footerUP}>
          <div className={style.info}>
            <Logo />
            <p className={style.text}>
              Createx SEO Agency is a full-service digital marketing agency. We
              help businesses make more money through a wealth of performance
              data and market research. We create science-based SEO strategies
              to empower our clients.
            </p>
            <Social />
          </div>
          <FooterMenuColumn title="COMPANY" min={0} max={5} />
          <FooterMenuColumn title="SERVICES" min={5} max={10} />
          <FooterContactUs />
          <FooterSignUp />
        </div>
        <div className={style.footerMiddle}>
          <FooterAwards />
          <div className={style.gototop}>
            <span>GO TO TOP</span>
            <button className={style.button} onClick={scrollToTop}>
              <img src="./image/footer/up-btn.svg" alt="arow up" />
            </button>
          </div>
        </div>
      </div>
      <div className={style.footerDown}>
        <div className="container">
          <div className={style.copyright}>
            <span>&copy; All rights reserved.Made with</span>
            <img src="./image/footer/heart.svg" alt="heart" />
            <span>by Createx Studio </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
