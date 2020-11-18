import React, { useContext } from "react";
import { TDataRecProd } from "../MainPageComposition/types";
import cartSvg from "../../image/cart.svg";
import { MainContext } from "../../context/context";
type TProps = {
  content: TDataRecProd;
};

export const ItemProductCatalog: React.FC<TProps> = ({ content }) => {
  const { setItemCart } = useContext(MainContext);

  return (
    <div className="item-product-catalog">
      <div className="image-wrapper">
        <img src={content.image} alt="" />
      </div>
      <div className="name-wrapper">
        <p>{content.name}</p>
      </div>
      <div className="price-wrapper">
        {content.discount ? (
          <div className="wrapper-discount">
            <p className="price-cat">{content.price}</p>
            <p className="price-cat-discount">{content.discount}</p>
          </div>
        ) : (
          <div className="wrapper-price-catalog">
            <p>{content.price}</p>
          </div>
        )}
      </div>
      <div className="btn-wrapper-catalog">
        <span className="btn btn-bay">Купить</span>
        <span
          className="btn btn-cart"
          onClick={() => setItemCart(content._id, 1)}
        >
          <img src={cartSvg} alt="" />
        </span>
      </div>
    </div>
  );
};
