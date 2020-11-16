import React, { useContext, useEffect, useState } from "react";
import { request } from "../../api";
import { MainContext } from "../../context/context";
import { TDataRecProd } from "../MainPageComposition/types";
import { ItemCart } from "./ItemCart";
interface IStateCart {
  closeCart: boolean;
  dataProd: Array<TDataRecProd>;
}
export const CartWrapper: React.FC = () => {
  const [dataCart, setDataCart] = useState<IStateCart>({
    closeCart: false,
    dataProd: [],
  });
  const { toggleCart } = useContext(MainContext);
  useEffect(() => {
    const data: any = localStorage.getItem("cart");
    if (data !== null && data !== undefined) {
      let parseData: any = JSON.parse(data);

      const arrayNew: Array<TDataRecProd> = [];
      parseData.map((e: any) => {
        request({
          method: "GET",
          url: `/product/get_by_id/${e.id}`,
        })
          .then((res) => {
            if (res) {
              arrayNew.push(res.data);
            }
            setDataCart((prev) => ({
              ...prev,
              dataProd: arrayNew,
            }));
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }, []);
  const handleCart = () => {
    setDataCart((prev) => ({
      ...prev,
      closeCart: true,
    }));
    setTimeout(() => {
      toggleCart();
      setDataCart((prev) => ({
        ...prev,
        closeCart: false,
      }));
    }, 500);
  };
  console.log(dataCart);

  return (
    <div
      className={`cart-wrapper ${dataCart.closeCart ? "close-cart-wrap" : ""}`}
    >
      <div className="top-line">
        <h1 className="h1">Корзина</h1>
        <span onClick={handleCart}>X</span>
      </div>
      <div className="cart-item-collection">
        {dataCart.dataProd.map((e, i) => (
          <ItemCart key={i} content={e} />
        ))}
      </div>
    </div>
  );
};
