import React from "react";
import { Switch } from "react-router-dom";
import { AddProductPage } from "../pages/AddProductPage/AddProductPage";
import { MainPage } from "../pages/MainPage/MainPage";
import { OrdersPage } from "../pages/OrdersPage/OrdersPage";
import { PanelPage } from "../pages/PanelPage/PanelPage";
import { SettingsPage } from "../pages/SettingsPage/SettingsPage";
import { RouteWithSubRoutes } from "./RouteWithSubRoutes";

export const Routes = () => {
  const routes = [
    { path: "/", exact: true,  component: MainPage },
    { path: "/paneladmin", component: PanelPage },
    { path: "/orders", component: OrdersPage },
    { path: "/addproduct", component: AddProductPage },
    { path: "/settings", component: SettingsPage },
  ];
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
};
