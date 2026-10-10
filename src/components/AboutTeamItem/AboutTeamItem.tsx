import type React from "react";
import style from "./aboutteamitem.module.scss";
import type { IPropsTeams } from "../../types";

const AboutTeamItem: React.FC<IPropsTeams> = ({ img, alt, name, position }) => {
  return (
    <div className={style.item}>
      <div className={style.image}>
        <img src={img} alt={alt} />
      </div>
      <div className={style.info}>
        <h4 className={style.title}>{name}</h4>
        <p className={style.position}>{position}</p>
      </div>
    </div>
  );
};

export default AboutTeamItem;
