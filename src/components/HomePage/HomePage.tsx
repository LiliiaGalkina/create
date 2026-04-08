import style from "./homepage.module.scss";
import HomeHero from "../HomeHero/HomeHero";
import AwardsBlock from "../AwardsBlock/AwardsBlock";
import Clients from "../Clients/Clients";
import Agency from "../Agency/Agency";
import Achievements from "../Achievements/Achievements";
import OurServices from "../OurServices/OurServices";
import GetFreeSeo from "../GetFreeSeo/GetFreeSeo";
import AskQuestions from "../AskQuestions/AskQuestions";

const HomePage = () => {
  return (
    <main>
      <HomeHero />
      <div className="container">
        <AwardsBlock />
        <Clients />
      </div>
      <Agency />
      <Achievements />
      <OurServices/>
      <GetFreeSeo/>
      <AskQuestions/>
    </main>
  );
};

export default HomePage;
