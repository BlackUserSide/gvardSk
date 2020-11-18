import { Dispatch, FormEvent } from "react";
import { IStateOrder } from "../OrderPage";

export type TOrderContext = {
  changeState: (e: FormEvent<HTMLInputElement>) => void;
  actionStep: number;
  changeActionStep: (step: number) => void;
  stateOrder: IStateOrder;
  changeDellMethod: (method: string) => void;
};

export type ActionType = {
  name: string;
  value: string;
};
