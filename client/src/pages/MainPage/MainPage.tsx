import React from "react";
import { Header } from "../../components/Header";
import { CountPanel } from "../../components/MainPageComposition/CountPanel";
import { MainSlider } from "../../components/MainPageComposition/MainSlider";
import { RecomendedWrapper } from "../../components/MainPageComposition/RecomendedWrapper";
import "./mainpage.sass";
export const MainPage: React.FC = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      <MainSlider />
      <CountPanel />
      <RecomendedWrapper />
    </div>
  );
};
