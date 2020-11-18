import React, { useContext } from "react";
import { TDataRecProd } from "./types";
import cart from "../../image/cart.svg";
import { MainContext } from "../../context/context";
type TProps = {
  content: TDataRecProd;
};

export const ItemRecProd: React.FC<TProps> = ({ content }) => {
  const { setItemCart } = useContext(MainContext);
  console.log(content);
  return (
    <div className="item-rec-wrapper">
      <div className="image-wrapper">
        <img src={content.image} alt="" />
      </div>
      <div className="name-wrapper">
        <p>{content.name}</p>
      </div>
      {Number(content.discount) > 0 ? (
        <>
          <div className="sale-status">
            <p>SALE</p>
          </div>
          <div className="wrapper-price-discount">
            <p>{content.price} ₴</p>
            <p>{content.discount} ₴</p>
          </div>
        </>
      ) : (
        <div className="wrapper-price">
          <p>{content.price} ₴</p>
        </div>
      )}

      <div className="btn-collection-item">
        <span className="btn btn-bay">Купить</span>
        <span
          className="btn btn-card"
          onClick={() => setItemCart(content._id, 1)}
        >
          <img src={cart} alt="" />
        </span>
      </div>
    </div>
  );
};
