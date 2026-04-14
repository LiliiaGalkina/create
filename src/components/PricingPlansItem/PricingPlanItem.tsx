import type React from "react";
import style from "./pricingplanitem.module.scss";
import type { prisingPlansProps } from "../../types";
import Button from "../Button/Button";

const PricingPlansItem:React.FC<prisingPlansProps> = ({tarif, price}) => {
    return (
      <div
        className={style.item}
        style={{
          backgroundColor: tarif === "Optimal" ? "#1E212C" : "#FFFFFF",
          color: tarif === "Optimal" ? "#FFFFFF" : "#1E212C",
        }}
      >
        <div className={style.up}>
          <h3
            className={style.title}
            style={{ color: tarif === "Optimal" ? "#FFFFFF" : "#1E212C" }}
          >
            {tarif}
          </h3>
          <div
            className={style.price}
            style={{ color: tarif === "Optimal" ? "#03CEA4" : "#7772F1" }}
          >
            ${price} <sup>/mon</sup>
          </div>
        </div>
        <ul className={style.list}>
          <li
            style={{
              backgroundImage:
                tarif === "Optimal"
                  ? "url(./image/home/pricing-mark-green.svg)"
                  : "url(public/image/home/pricing-mark.svg)",
            }}
          >
            Advanced Analytics
          </li>
          <li
            style={{
              backgroundImage:
                tarif === "Optimal"
                  ? "url(./image/home/pricing-mark-green.svg)"
                  : "url(public/image/home/pricing-mark.svg)",
            }}
          >
            Change Management
          </li>
          <li
            style={{
              backgroundImage:
                tarif === "Optimal"
                  ? "url(./image/home/pricing-mark-green.svg)"
                  : "url(public/image/home/pricing-mark.svg)",
            }}
          >
            Corporate Finance
          </li>
          <li
            style={{
              backgroundImage:
                tarif === "Optimal"
                  ? "url(./image/home/pricing-mark-green.svg)"
                  : "url(public/image/home/pricing-mark.svg)",
            }}
          >
            One Way Link Building
          </li>
          <li
            style={{
              backgroundImage:
                tarif === "Optimal"
                  ? "url(./image/home/pricing-mark-green.svg)"
                  : "url(public/image/home/pricing-mark.svg)",
            }}
          >
            Social Media Marketing
          </li>
          <li
            style={{
              backgroundImage:
                tarif === "Basic"
                  ? "url(./image/home/pricing-cross.svg)"
                  : tarif === "Optimal"
                    ? "url(./image/home/pricing-mark-green.svg)"
                    : "url(public/image/home/pricing-mark.svg)",
            }}
          >
            Strategy & Marketing
          </li>
          <li
            style={{
              backgroundImage:
                tarif === "Basic" || tarif === "Optimal"
                  ? "url(./image/home/pricing-cross.svg)"
                  : "url(public/image/home/pricing-mark.svg)",
            }}
          >
            Information Technology
          </li>
        </ul>
        <Button textButton="Choose plan" classDop="pricingButton" />
      </div>
    );
}
 
export default PricingPlansItem;