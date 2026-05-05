import type { TPropsElement } from "../../types";
import style from "./servicesblockwrapper.module.scss";

const ServicesBlockWrapper = ({ children }: TPropsElement) => {
  return <section className={style.block}>{children}</section>;
};

export default ServicesBlockWrapper;
