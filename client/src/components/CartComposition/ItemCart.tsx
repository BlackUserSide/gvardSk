import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/context";

type TProps = {
  content: any;
  updateHandler: any;
};

export const ItemCart: React.FC<TProps> = ({ content, updateHandler }) => {
  const [dataCart, setDataCart] = useState({
    id: "",
    qnt: 0,
  });
  const { dellCartItem, removeQnt } = useContext(MainContext);
  const deleteHandler = () => {
    dellCartItem(content._id);
    updateHandler();
  };
  const updateHandl = () => {
    const data = localStorage.getItem("cart");
    if (data !== null) {
      let dataParse = JSON.parse(data);

      let mainCartItem = dataParse.find((e: any) => {
        if (e.id === content._id) {
          return e;
        }
      });
      setDataCart(mainCartItem);
    }
  };
  useEffect(() => {
    updateHandl();
  }, []);
  const qntHandler = (method: string) => {
    removeQnt(content._id, method);
    updateHandl();
  };
  return (
    <div className="item-cart">
      <div className="image-wrapper">
        <img src={content.image} alt="" />
      </div>
      <div className="content-compose">
        <div className="price-wrapper">
          {Number(content.discount) ? (
            <span className="discount">
              {Number(content.discount) * dataCart.qnt} ₴
            </span>
          ) : (
            <span className="price">
              {Number(content.price) * dataCart.qnt} ₴
            </span>
          )}
        </div>
        <div className="qnt-wrapper">
          <span className="reg-qnt" onClick={() => qntHandler("minus")}>
            -
          </span>
          <span className="data-qnt">{dataCart.qnt}</span>
          <span className="reg-qnt" onClick={() => qntHandler("plus")}>
            +
          </span>
        </div>
      </div>
      <span className="dell-item" onClick={deleteHandler}>
        X
      </span>
    </div>
  );
};
