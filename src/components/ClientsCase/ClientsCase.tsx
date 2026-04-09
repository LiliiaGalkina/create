import style from "./clientscase.module.scss";
import ClientsCaseSlider from "../ClientsCaseSlider/ClientsCaseSlider";
import Button from "../Button/Button";

const ClientsCase = () => {
    return (
      <section className={style.clientscase}>
        <div className="container">
          <h2 className={style.title}>Read our clients' case studies</h2>
          <ClientsCaseSlider />
          <div className={style.buttonBlock}>
            <h3 className={style.subtitle}>Explore more case studies</h3>
            <Button
              textButton="View all case studies"
              classDop="clientsButton"
            />
          </div>
        </div>
      </section>
    );
}
 
export default ClientsCase;