import { useState } from "react";
import style from "./pricingplansbuttons.module.scss";

const PricingPlansButtons = () => {
  const [isMonthActive, setIsMonthActive] = useState(true);
  const [isYearActive, setIsYearActive] = useState(false);

  const handleMonthSwitchButtons = () => {
    if (!isMonthActive) {
      setIsMonthActive(!isMonthActive);
      setIsYearActive(!isYearActive);
    }
  };

  const handleYearSwitchButtons = () => {
    if (!isYearActive) {
      setIsMonthActive(!isMonthActive);
      setIsYearActive(!isYearActive);
    }
  };

  return (
    <div className={style.buttons}>
      <button
        className={style.monthButton}
        style={{
          backgroundColor: isMonthActive ? "#7772F1" : "#FFFFFF",
          color: isMonthActive ? "#FFFFFF" : "#7772F1",
          zIndex: isMonthActive ? 2 : 1
        }}
        onClick={handleMonthSwitchButtons}
      >
        Monthly
      </button>
      <button
        className={style.yearButton}
        style={{
          backgroundColor: isYearActive ? "#7772F1" : "#FFFFFF",
          color: isYearActive ? "#FFFFFF" : "#7772F1",
          zIndex: isYearActive ? 2 : 1
        }}
        onClick={handleYearSwitchButtons}
        title="not implemented"
      >
        Yearly <span>-12% Off</span>
      </button>
    </div>
  );
};

export default PricingPlansButtons;
