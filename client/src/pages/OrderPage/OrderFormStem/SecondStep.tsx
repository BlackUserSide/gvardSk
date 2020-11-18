import React, { FormEvent, useContext } from "react";
import { OrderContext } from "../context/context";

export const SecondStep: React.FC = () => {
  const {
    changeState,
    changeActionStep,
    stateOrder,
    changeDellMethod,
  } = useContext(OrderContext);
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    if (changeState !== undefined) {
      changeState(e);
    }
  };
  const submitHandler = () => {
    if (changeActionStep) {
      changeActionStep(0);
    }
  };
  const changeDelMethod = (method: string) => {
    if (changeDellMethod) {
      changeDellMethod(method);
    }
  };
  return (
    <div className="second-step-wrapper main-form-wrapper-order">
      <div className="top-line">
        <h3 className="h3">Введите данные</h3>
      </div>
      <input
        type="text"
        name="email"
        value={stateOrder !== undefined ? stateOrder.email : ""}
        onChange={changeHandler}
        placeholder="E-mail"
      />
      <div className="del-method-change">
        <span
          className={`change-del ${
            stateOrder
              ? stateOrder.delMethod === "0"
                ? "active-change-del"
                : ""
              : ""
          }`}
          onClick={() => changeDelMethod("0")}
        >
          Самовывоз
        </span>
        <span
          className={`change-del ${
            stateOrder
              ? stateOrder.delMethod === "1"
                ? "active-change-del"
                : ""
              : ""
          }`}
          onClick={() => changeDelMethod("1")}
        >
          Новая почта
        </span>
      </div>
      {stateOrder ? (
        stateOrder.delMethod === "1" ? (
          <input
            type="text"
            name="mailPost"
            value={stateOrder ? stateOrder.mailPost : ""}
            onChange={changeHandler}
            placeholder="Отделение новой почты"
          />
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <input
        type="text"
        name="city"
        value={stateOrder !== undefined ? stateOrder.phone : ""}
        onChange={changeHandler}
        placeholder="Город"
      />
      <button
        type="button"
        className="btn btn-change-step"
        onClick={submitHandler}
      >
        Продолжить
      </button>
    </div>
  );
};
