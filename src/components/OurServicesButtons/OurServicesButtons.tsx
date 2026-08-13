import type { OurServicesButtonsProps } from "../../types";
import style from "./ourservicesbuttons.module.scss";


const OurServicesButtons: React.FC<OurServicesButtonsProps> = ({
  items,
  activeId,
  onTabChange,
}) => {
  return (
    <ul className={style.items} role="tablist">
      {items.map((item) => (
        <li
          key={item.id}
          role="tab"
          onClick={() => onTabChange(item.id)}
          className={`${style.item} ${item.id === activeId ? style.active : ""}`}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default OurServicesButtons;
