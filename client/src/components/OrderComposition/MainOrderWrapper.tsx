import React, { useContext, useEffect } from "react";
import { OrderContext } from "../../pages/OrderPage/context/context";
import { FirstStep } from "../../pages/OrderPage/OrderFormStem/FirstStep";
import { SecondStep } from "../../pages/OrderPage/OrderFormStem/SecondStep";
import { ThridStep } from "../../pages/OrderPage/OrderFormStem/ThridStep";

export const MainOrderWrapper: React.FC = () => {
  const { actionStep } = useContext(OrderContext);
  let content = undefined;

  switch (actionStep) {
    case 1:
      content = <FirstStep />;
      break;
    case 2:
      content = <SecondStep />;
      break;
    case 3:
      content = <ThridStep />;
      break;
  }

  return (
    <div className="main-order-wrapper">
      <div className="nav-wrap-step">
        <span className={`step-wrap ${actionStep === 1 ? "active-step" : ""}`}>
          1
        </span>
        <span className={`step-wrap ${actionStep === 2 ? "active-step" : ""}`}>
          2
        </span>
        <span className={`step-wrap ${actionStep === 3 ? "active-step" : ""}`}>
          3
        </span>
      </div>
      {content}
    </div>
  );
};
