import React from "react";

export const CountPanel: React.FC = () => {
  return (
    <div className="count-panel">
      <div className="item-count">
        <p className="number-wrapper">1500</p>
        <p>Заказов</p>
      </div>
      <div className="item-count">
        <p className="number-wrapper">4750</p>
        <p>Товаров</p>
      </div>
      <div className="item-count">
        <p className="number-wrapper">750</p>
        <p>Отзывов</p>
      </div>
    </div>
  );
};
