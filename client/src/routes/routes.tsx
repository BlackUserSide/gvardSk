import React from "react";
import { Switch } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { RouteWithSubRoutes } from "./RouteWithSubRoutes";

export const useRoutes = (isAuth: boolean) => {
  const routes = [{ path: "/", component: MainPage }];
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
};
