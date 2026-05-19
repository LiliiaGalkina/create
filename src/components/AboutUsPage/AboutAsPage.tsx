import AboutHero from "../AboutHero/AboutHero";
import Achievements from "../Achievements/Achievements";
import AboutVideo from "../AboutVideo/AboutVideo";
import AboutCoreValues from "../AboutCoreValues/AboutCoreValues";

const AboutUsPage = () => {
  return (
    <main>
      <AboutHero />
      <Achievements />
      <div className="container">
        <AboutVideo />
        <AboutCoreValues/>
      </div>
    </main>
  );
};

export default AboutUsPage;
