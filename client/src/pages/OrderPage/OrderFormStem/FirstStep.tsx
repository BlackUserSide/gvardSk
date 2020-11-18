import React, { FormEvent, useContext, useEffect, useState } from "react";
import { OrderContext } from "../context/context";

export const FirstStep: React.FC = () => {
  const { changeState, changeActionStep, stateOrder } = useContext(
    OrderContext
  );
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    if (changeState !== undefined) {
      changeState(e);
    }
  };
  const submitHandler = () => {
    if (changeActionStep) {
      changeActionStep(2);
    }
  };
  return (
    <div className="first-step-wrapper main-form-wrapper-order">
      <div className="top-line">
        <h3 className="h3">Введите данные</h3>
      </div>
      <input
        type="text"
        name="name"
        value={stateOrder !== undefined ? stateOrder.name : ""}
        onChange={changeHandler}
        placeholder="Имя"
      />
      <input
        type="text"
        name="lastName"
        value={stateOrder !== undefined ? stateOrder.lastName : ""}
        onChange={changeHandler}
        placeholder="Фамилия"
      />
      <input
        type="text"
        name="phone"
        value={stateOrder !== undefined ? stateOrder.phone : ""}
        onChange={changeHandler}
        placeholder="Номер телефона"
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
