import style from "./homepage.module.scss";
import HomeHero from "../HomeHero/HomeHero";
import AwardsBlock from "../AwardsBlock/AwardsBlock";
import Clients from "../Clients/Clients";
import Agency from "../Agency/Agency";

const HomePage = () => {
    return (
      <main>
        <HomeHero />
        <div className="container">
          <AwardsBlock />
          <Clients />
        </div>
        <Agency />
      </main>
    );
}
 
export default HomePage;