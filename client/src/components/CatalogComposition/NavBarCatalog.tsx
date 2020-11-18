import React, { useContext, useEffect, useState } from "react";
import { request } from "../../api";
import { TCategory } from "../../pages/CatalogPage/types";
import { CatalogContext } from "./context/contextCatalog";

export const NavBarCatalog: React.FC = () => {
  const [dataNav, setDataNav] = useState<Array<TCategory>>([]);
  const { actionComponents, actionId } = useContext(CatalogContext);
  useEffect(() => {
    request({
      method: "GET",
      url: "/category/",
    })
      .then((res) => {
        if (res) {
          setDataNav(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handlerChangeActive = (id: any) => {
    if (actionComponents !== undefined) {
      actionComponents(id);
    }
  };
  return (
    <div className="nav-bar-catalog">
      <nav className="nav-catalog">
        <ul>
          {dataNav.map((e, i) => (
            <li key={i}>
              <span
                className={`span-link-catalog ${
                  actionId === +e.id ? "active-link" : ""
                }`}
                onClick={() => handlerChangeActive(e.id)}
              >
                {e.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
