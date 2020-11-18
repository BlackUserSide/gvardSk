import React, { useEffect, useState } from "react";

export const ThridStep: React.FC = () => {
  const [dataCart, setDataCart] = useState([]);
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData !== null) {
      const parseData = JSON.parse(cartData);
      setDataCart(parseData);
    }
  }, []);
  return (
    <div className="thrid-step-wrapper main-form-wrapper-order">
      <div className="top-line">
        <h3 className="h3">Проверьте товары в заказе</h3>
      </div>
      <div className="wrapper-item-order-product"></div>
    </div>
  );
};
