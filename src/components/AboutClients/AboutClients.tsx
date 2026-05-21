import Clients from "../Clients/Clients";
import style from "./aboutclients.module.scss";

const AboutClients = () => {
    return (
      <section className={style.clients}>
        <h3 className={style.title}>240+ satisfied clients</h3>
        <Clients clientsCount={12} />
      </section>
    );
}
 
export default AboutClients;