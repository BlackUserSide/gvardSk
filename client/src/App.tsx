import React from "react";
import "./App.sass";
import { useRoutes } from "./routes/routes";
export const App: React.FC = () => {
  let val = false;
  if (localStorage.getItem("token") !== null) {
    val = true;
  }
  const routes = useRoutes(val);

  return <div className="main-app-wrapper">{routes}</div>;
};
