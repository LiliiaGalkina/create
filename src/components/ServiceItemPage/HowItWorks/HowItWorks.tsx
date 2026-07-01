import style from "./howitworks.module.scss";
import HowItWorksItem from "./HowItWorksItem";

const HowItWorks = () => {
  return (
    <section className={style.howItWorks}>
      <h3 className={style.title}>That’s how it works</h3>
      <div className={style.items}>
        <div className={`${style.item} ${style.left}`}></div>
        <HowItWorksItem
          headline="step1"
          subtitle="Off-Site SEO Analysis"
          text="Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque."
          dopClass="right"
        />
        <HowItWorksItem
          headline="step2"
          subtitle="Technical SEO Optimizations"
          text="Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis."
          dopClass="left"
        />
        <div className={`${style.item} ${style.right}`}></div>
        <div className={`${style.item} ${style.left}`}></div>
          <HowItWorksItem
            headline="step3"
            subtitle="Usability Check"
            text="Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. Varius praesent pretium in leo, accumsan, in ultricies. "
            dopClass="right"
          />
          <HowItWorksItem
            headline="step4"
            subtitle="Content Marketing"
            text="Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor. Faucibus in leo, nulla odio nulla imperdiet quis faucibus neque. "
            dopClass="left"
          />
        <div className={`${style.item} ${style.right}`}></div>
      </div>
    </section>
  );
};

export default HowItWorks;
