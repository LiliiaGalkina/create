import style from "./homepage.module.scss";
import HomeHero from "../HomeHero/HomeHero";
import AwardsBlock from "../AwardsBlock/AwardsBlock";

const HomePage = () => {
    return ( 
        <main>
            <HomeHero/>
            <div className="container">
                <AwardsBlock/>
            </div>
        </main>
     );
}
 
export default HomePage;