import style from "./ourservicesbuttons.module.scss";

const OurServicesButtons = () => {
    return (
      <ul className={style.items}>
        <li className={`${style.item} ${style.active}`}>Social Media</li>
        <li className={style.item} title="not implemented">
          SEO
        </li>
        <li className={style.item} title="not implemented">
          Research
        </li>
        <li className={style.item} title="not implemented">
          Content & PR
        </li>
        <li className={style.item} title="not implemented">
          Payed Traffic
        </li>
      </ul>
    );
}
 
export default OurServicesButtons;