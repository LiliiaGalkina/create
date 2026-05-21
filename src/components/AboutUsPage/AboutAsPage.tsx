import AboutHero from "../AboutHero/AboutHero";
import Achievements from "../Achievements/Achievements";
import AboutVideo from "../AboutVideo/AboutVideo";
import AboutCoreValues from "../AboutCoreValues/AboutCoreValues";
import AboutAwards from "../AboutAwards/AboutAwards";
import AboutSeoAgency from "../AboutSeoAgency/AboutSeoAgency";
import AboutFreeAnalysisForm from "../AboutFreeAnalysisForm/AboutFreeAnalisysForm";
import AboutClients from "../AboutClients/AboutClients";

const AboutUsPage = () => {
  return (
    <main>
      <AboutHero />
      <Achievements />
      <div className="container">
        <AboutVideo />
        <AboutCoreValues />
        <AboutSeoAgency />
        <AboutAwards />
        <AboutFreeAnalysisForm/>
        <AboutClients/>
      </div>
    </main>
  );
};

export default AboutUsPage;
