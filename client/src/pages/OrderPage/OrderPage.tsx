import React, { useState } from "react";
import { Header } from "../../components/Header";
import { MainOrderWrapper } from "../../components/OrderComposition/MainOrderWrapper";
import { OrderContext } from "./context/context";
import { TOrderContext } from "./context/type";
import "./order.sass";
export interface IStateOrder {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  mailPost: string;
  delMethod: string;
  city: string;
}
export const OrderPage: React.FC = () => {
  const [dataOrder, setDataOrder] = useState<IStateOrder>({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    mailPost: "",
    delMethod: "0",
    city: "",
  });
  const [actionStep, setActionStep] = useState(1);
  const orderContext: TOrderContext = {
    changeState: (e) => {
      const name = e.currentTarget.name;
      const value = e.currentTarget.value;
      setDataOrder((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    actionStep: actionStep,
    changeActionStep: (step: number) => {
      setActionStep(step);
    },
    stateOrder: dataOrder,
    changeDellMethod: (method) => {
      if (method === "0") {
        return setDataOrder((prev) => ({
          ...prev,
          delMethod: method,
        }));
      }
      setDataOrder((prev) => ({
        ...prev,
        delMethod: method,
      }));
    },
  };
  console.log(dataOrder);
  return (
    <>
      <div className="order-page">
        <Header />
        <OrderContext.Provider value={orderContext}>
          <MainOrderWrapper />
        </OrderContext.Provider>
      </div>
    </>
  );
};
