import { spawn } from "child_process";
import React, { useContext, useEffect, useState } from "react";
import { request } from "../../api";
import { TDataRecProd } from "../MainPageComposition/types";
import { CatalogContext } from "./context/contextCatalog";
import { ItemProductCatalog } from "./ItemProductCatalog";

export const WrapperComponent: React.FC = () => {
  const { actionId } = useContext(CatalogContext);
  const [dataProd, setDataProd] = useState<Array<TDataRecProd>>([]);
  useEffect(() => {
    request({
      method: "GET",
      url: `/product/get_by_category/${actionId}`,
    })
      .then((res) => {
        if (res) {
          setDataProd(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [actionId]);
  return (
    <div className="wrapper-component-main">
      {dataProd.length > 0 ? "" : <h3>Список товаров пуст</h3>}
      {dataProd.map((e, i) => (
        <ItemProductCatalog key={i} content={e} />
      ))}
    </div>
  );
};
