import React, { useMemo, useState } from "react";
import { JsxEmit } from "typescript";
import "./App.sass";
import { CartWrapper } from "./components/CartComposition/CartWrapper";
import { TDataRecProd } from "./components/MainPageComposition/types";
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

        const candidate = data.find((e: any) => {
          if (e.id === id) {
            ++e.qnt;
            return e;
          }
        });
        if (!candidate) {
          data.push({ id: id, qnt: qnt });
        }

        setDataApp((prev) => ({
          ...prev,
          cart: true,
        }));
        localStorage.setItem("cart", JSON.stringify(data));
        return;
      }
    },
    toggleCart: () => {
      handleCart();
    },
    dellCartItem: (id: string) => {
      let dataCart = localStorage.getItem("cart");
      if (dataCart !== null) {
        const arrCart: any = JSON.parse(dataCart);
        const newArr = arrCart.filter((e: any) => e.id !== id);
        console.log(newArr);

        localStorage.setItem("cart", JSON.stringify(newArr));
      }
    },
    removeQnt: (id: string, method: string) => {
      let dataCart = localStorage.getItem("cart");
      if (dataCart !== null) {
        const arrCart: any = JSON.parse(dataCart);

        arrCart.map((e: any) => {
          if (e.id === id) {
            if (method === "plus") {
              ++e.qnt;
            } else {
              if (e.qnt > 1) {
                --e.qnt;
              } else {
                e.qnt = 1;
              }
            }
          }
        });
        localStorage.setItem("cart", JSON.stringify(arrCart));
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
