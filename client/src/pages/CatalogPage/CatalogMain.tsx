import React, { useState } from "react";
import { CatalogContext } from "../../components/CatalogComposition/context/contextCatalog";
import { TContextCatalog } from "../../components/CatalogComposition/context/types";
import { NavBarCatalog } from "../../components/CatalogComposition/NavBarCatalog";
import { WrapperComponent } from "../../components/CatalogComposition/WrapperComponent";
import { Header } from "../../components/Header";
import "./catalog.sass";

export const CatalogMain: React.FC = () => {
  const [action, setAction] = useState(1);
  const catalogContext: TContextCatalog = {
    actionComponents: (id) => {
      setAction(+id);
    },
    actionId: action,
  };
  return (
    <>
      <CatalogContext.Provider value={catalogContext}>
        <div className="catalog-main">
          <Header />
          <NavBarCatalog />
          <div className="main-category-catalog">
            <WrapperComponent />
          </div>
        </div>
      </CatalogContext.Provider>
    </>
  );
};
