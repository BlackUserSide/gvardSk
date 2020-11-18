import React from "react";
import { Switch } from "react-router-dom";
import { CatalogMain } from "../pages/CatalogPage/CatalogMain";
import { MainPage } from "../pages/MainPage/MainPage";
import { OrderPage } from "../pages/OrderPage/OrderPage";
import { RouteWithSubRoutes } from "./RouteWithSubRoutes";

export const useRoutes = (isAuth: boolean) => {
  const routes = [
    { path: "/", exact: true, component: MainPage },
    { path: "/catalog", component: CatalogMain },
    { path: "/order", component: OrderPage },
  ];
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
};
