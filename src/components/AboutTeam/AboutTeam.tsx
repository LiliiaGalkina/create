import style from "./aboutteam.module.scss";
import { team } from "../../data";
import AboutTeamItem from "../AboutTeamItem/AboutTeamItem";

const AboutTeam = () => {
    return (
      <section className={style.team}>
        <h3 className={style.title}>Meet our team</h3>
        <div className={style.items}>
            {
                team.map((item) => <AboutTeamItem key={item.id} {...item}/>)
            }
        </div>
      </section>
    );
}
 
export default AboutTeam;