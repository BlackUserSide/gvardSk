import React from "react";

type TProps = {
  content: any;
};

export const ItemCart: React.FC<TProps> = ({ content }) => {
  return (
    <div className="item-cart">
      <div className="image-wrapper">
        <img src={content.image} alt="" />
      </div>
      <div className="content-compose">
        <div className="price-wrapper">
          {Number(content.discount) ? (
            <span className="discount">{content.discount} грн</span>
          ) : (
            <span className="price">{content.price} грн</span>
          )}
        </div>
      </div>
      <span className="dell-item">X</span>
    </div>
  );
};
