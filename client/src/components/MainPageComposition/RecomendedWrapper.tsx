import React, { useEffect, useState } from "react";
import { request } from "../../api";
import { ItemRecProd } from "./ItemRecProd";
import { TDataRecProd } from "./types";

export const RecomendedWrapper: React.FC = () => {
  const [dataProduct, setDataProduct] = useState<Array<TDataRecProd>>([]);
  useEffect(() => {
    request({
      method: "GET",
      url: "/product",
    })
      .then((res) => {
        if (res) {
          setDataProduct(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="recomended-wrapper">
      <div className="top-line">
        <h1 className="h1">Рекомендуемы товары</h1>
      </div>
      <div className="rec-wrap-item">
        {dataProduct.map((e, i) => (
          <ItemRecProd key={i} content={e} />
        ))}
      </div>
    </div>
  );
};
