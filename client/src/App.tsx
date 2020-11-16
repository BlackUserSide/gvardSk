import React, { useMemo, useState } from "react";
import "./App.sass";
import { CartWrapper } from "./components/CartComposition/CartWrapper";
import { MainContext } from "./context/context";
import { useRoutes } from "./routes/routes";
interface IStateApp {
  cart: boolean;
}
export const App: React.FC = () => {
  const [dataApp, setDataApp] = useState<IStateApp>({
    cart: false,
  });
  let val = false;
  if (localStorage.getItem("token") !== null) {
    val = true;
  }
  const handleCart = () => {
    if (dataApp.cart) {
      setDataApp((prev) => ({
        ...prev,
        cart: false,
      }));
    } else {
      setDataApp((prev) => ({
        ...prev,
        cart: true,
      }));
    }
  };
  const routes = useRoutes(val);
  const mainContext = {
    setItemCart: (id: string, qnt: number) => {
      const cartData = localStorage.getItem("cart");
      if (cartData === null) {
        const data = [{ id: id, qnt: qnt }];
        localStorage.setItem("cart", JSON.stringify(data));
      } else {
        const data: any = JSON.parse(cartData);
        data.push({ id: id, qnt: qnt });
        localStorage.setItem("cart", JSON.stringify(data));
      }
    },
    toggleCart: () => {
      handleCart();
    },
    dellCartItem: (id: string) => {
      let dataCart = localStorage.getItem("cart");
      if (dataCart !== null) {
      }
    },
  };
  console.log(dataApp);

  return (
    <>
      <MainContext.Provider value={mainContext}>
        <div className="main-app-wrapper">{routes}</div>
        {dataApp.cart ? <CartWrapper /> : ""}
      </MainContext.Provider>
    </>
  );
};
