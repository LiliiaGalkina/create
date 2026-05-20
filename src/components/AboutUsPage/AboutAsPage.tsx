import AboutHero from "../AboutHero/AboutHero";
import Achievements from "../Achievements/Achievements";
import AboutVideo from "../AboutVideo/AboutVideo";
import AboutCoreValues from "../AboutCoreValues/AboutCoreValues";
import AboutSeoAgency from "../AboutSeoAgency/AboutseoAgency";

const AboutUsPage = () => {
  return (
    <main>
      <AboutHero />
      <Achievements />
      <div className="container">
        <AboutVideo />
        <AboutCoreValues/>
        <AboutSeoAgency/>
      </div>
    </main>
  );
};

export default AboutUsPage;
