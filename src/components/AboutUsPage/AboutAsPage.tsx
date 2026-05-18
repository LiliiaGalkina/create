import AboutHero from "../AboutHero/AboutHero";
import Achievements from "../Achievements/Achievements";
import AboutVideo from "../AboutVideo/AboutVideo";

const AboutUsPage = () => {
  return (
    <main>
      <AboutHero />
      <div className="container">
        <Achievements />
        <AboutVideo />
      </div>
    </main>
  );
};

export default AboutUsPage;
