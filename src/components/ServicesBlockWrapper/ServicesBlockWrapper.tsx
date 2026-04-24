import style from "./servicesblockwrapper.module.scss";
import type { JSX } from "react";

type PropsElement = { children: JSX.Element };

const ServicesBlockWrapper = ({ children }: PropsElement) => {
  return (
    <section className={style.block}>
      <div className="container">{children}</div>
    </section>
  );
};

export default ServicesBlockWrapper;
